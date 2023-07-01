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


<?php

    session_start();


    // check to see if a user is logged in before being able to access the page
    if(isset($_SESSION['username'])){

       echo "<h3>Welcome " . $_SESSION['username'] . "! You are now viewing users pending access!</h3>";

    }
    else{
        // Login failed, go away
        header('Location: goaway.php');
    }


?>


	</article>




	<article>

        <h3>This is the first user in the queue</h3>
        <?php
            // Opens the json file
            $usersJson = file_get_contents('../json/users.json');
            $userArray = json_decode($usersJson, true);
            

            foreach ($userArray as $infoArray){
                echo "uname: ". $infoArray["uname"] . "<br>";
                echo "      fname: ". $infoArray["fname"] . "<br>";
                echo "      lname: ". $infoArray["lname"] . "<br>";
                echo "      email: ". $infoArray["email"] . "<br>";
                echo "      pword: ". $infoArray["pword"] . "<br>";
                echo "      aboutYou: ". $infoArray["aboutYou"].  "<br>";
                echo "-------------------------------------" . "<br>";

                // ensure only the first is being printed
                // These data values are stored in $infoArray
                break;
            }
           
            if(array_key_exists('button1', $_POST)) {

                // open the admins Json
                $adminsJson = file_get_contents('../json/admins.json');
                $adminsArray = json_decode($adminsJson, true);

                // Save the current Admins list
                foreach ($adminsArray as $currentAdmins){
                }

                // build the new admin array
                $newAdmin = array(
                    "fname" => $infoArray["fname"],
                    "lname" => $infoArray["lname"],
                    "email" => $infoArray["email"],
                    "uname" => $infoArray["uname"],
                    "pword" => $infoArray["pword"],
                    "aboutYou" => $infoArray["aboutYou"]
                );

                $adminsArray[] = $newAdmin; // Append the new user to the existing array

                $updatedAdmins = json_encode($adminsArray, JSON_PRETTY_PRINT);

                file_put_contents('../json/admins.json', $updatedAdmins);

                
                // Remove entry
                if (!empty($userArray)) {
                    array_shift($userArray);
                }

                // Re-post new user list
                $newUsersData = json_encode($userArray, JSON_PRETTY_PRINT);
                file_put_contents('../json/users.json', $newUsersData);
                
                
                // Reload the page
                header('Location: admitUsers.php');
            }
            else if(array_key_exists('button2', $_POST)) {
                // Remove entry
                if (!empty($userArray)) {
                    array_shift($userArray);
                }

                // Re-post new user list
                $newUsersData = json_encode($userArray, JSON_PRETTY_PRINT);
                file_put_contents('../json/users.json', $newUsersData);
                
                
                // Reload the page
                header('Location: admitUsers.php');
            }
            

        ?>
        <h3>Should they be admitted or denied?</h3>
        <form method="post">
        <input type="Submit" name="button1" value="Admit" />
        <input type="Submit" name="button2" value="Deny" />
        </form>
	</article>
	

</div>



<!--<footer id="foot">placeholder</footer>
<script src="time.js"></script>-->

</div>

</body>

</html> 
