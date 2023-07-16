<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="This is the login page of our project" />
		<meta name="robots" content="noindex nofollow" />
		<meta http-equiv="author" content="Ben Allen, Liam Cain, Guneet Matharu, Nickolas Raghunath" />
		<meta http-equiv="pragma" content="no-cache" />
		<link rel="icon" type="image/x-icon" href="../Spheal.ico">
		<link rel="stylesheet" type="text/css" href="../style1.css">
		<link href="../member.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript" src="../script1.js"></script>
		<script type="text/javascript" src="../time.js"></script>
	</head>
<body>

<div id="page">

<div id="content">
	<article>

<h1>Database Control</h1>
<h3>Here you can view and adjust data in the database</h3>
<p>All fields must have data in order to submit them to the database</p>

<?php
    session_start();
    // check to see if a user is logged in before being able to access the page
    if(isset($_SESSION['username'])){
    }
    else{
        // Login failed, go away
        header('Location: goaway.php');
    }

    function manual_database_update(int $node_ID, int $new_status, int $currentFloor, int $requestedFloor): void{
        // Grab the current date and time
        // status and nodeID arbitrarily set to 1 (will later be input boxes)
        date_default_timezone_set('America/New_York');
        $date1 = date('Y-m-d');
        $time1 = date('H:i:s');

        $db = new PDO(
            'mysql:host=127.0.0.1;dbname=elevatorG4',
            'ese',
            'ese'
        );

        $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        // Transaction
        $db->beginTransaction();
        try {
            $query = 'UPDATE elevatorNetwork
            SET status = :stat,
                date = :date1,
                time = :time1,
                currentFloor = :currentFloor,
                requestedFloor = :requestedFloor
            WHERE nodeID = :id';

            $statement = $db->prepare($query);
            $statement->bindValue('stat',$new_status);
            $statement->bindValue('date1',$date1);
            $statement->bindValue('time1',$time1);
            $statement->bindValue('currentFloor',$currentFloor);
            $statement->bindValue('requestedFloor',$requestedFloor);
            $statement->bindValue('id', $node_ID);
            $statement->execute();

            // Return # of updated rows
            $count = $statement->rowCount();
            if($count == 0){
                throw new Exception('Error - Database unchanged !!!');
            }
            echo "<br/><br/>Database updated<br/><br/>";
            $db->commit();
        }
        catch (Exception $e) {
            echo $e->getMessage();
            $db->rollBack();
        }
    }

    function displayDatabase(): void{
        $db = new PDO(
            'mysql:host=127.0.0.1;dbname=elevatorG4',
            'ese',
            'ese'
        );
        $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $query = 'SELECT * FROM elevatorNetwork';
        $rows = $db->query($query);
        echo "| &nbsp;&nbsp; DATE &nbsp; &nbsp;&nbsp;&nbsp;
        | &nbsp;&nbsp;&nbsp;TIME &nbsp;&nbsp;
        | NODEID | STATUS | CURRENT FLOOR | REQUESTED FLOOR |<br>";
        foreach($rows as $row){
            echo "<pre>| " . $row['date'] . " | " . $row['time'] . " |    " . 
                  $row["nodeID"] . 
                  "     |    " 
                  . $row["status"] . 
                  "    |         " . 
                  $row["currentFloor"] . 
                  "          |           " 
                  . $row["requestedFloor"] . "           |</pre>";
        }
        
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $nodeID = $_POST["nodeID"];
        $status = $_POST["status"];
        $cFloor = $_POST["cFloor"];
        $rFloor = $_POST["rFloor"];

        if($nodeID != NULL && $status != NULL && $cFloor != NULL && $rFloor != NULL){
            manual_database_update($nodeID, $status, $cFloor, $rFloor);
        }
        
        displayDatabase();

    }
?>

</article>

<article>

    <form method="POST" action=controlDatabase.php>
    <label for="nodeIDLabel" class="text_label">Node ID:</label>
    <input id="nodeID" type="number" class="text_input" name="nodeID">
    <br>
    <br>

    <label for="statusLabel" class="text_label">Status:</label>
    <input id="statusID" type="number" min="1" max="9" class="text_input" name="status">
    <br>
    <br>

    <label for="cFloorLabel" class="text_label">Current Floor:</label>
    <input id="cFloorID" type="number" min="1" max="3" class="text_input" name="cFloor">
    <br>
    <br>

    <label for="rFloorLabel" class="text_label">Requested Floor:</label>
    <input id="rFloorID" type="number" min="1" max="3" class="text_input" name="rFloor">

    <br><br>
    <input type="submit" value="Submit" />
</form>

<br>
<br>
<input type="submit" value="Return" onclick="window.location.href='member.php';">
</article>


</div>

<img src="../img/furret.gif" width=150 height=100></video>

<!--<footer id="foot">placeholder</footer>
<script src="time.js"></script>-->

</div>

</body>

</html> 
