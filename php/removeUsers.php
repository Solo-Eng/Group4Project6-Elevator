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

       echo "<h3>Welcome " . $_SESSION['username'] . "! You are now viewing users with Admin privileges!</h3>";

    }
    else{
        // Login failed, go away
        header('Location: goaway.php');
    }


?>


	</article>




	<article>

        <h3>This is the first user with Admin Priviliges</h3>
        <?php
            // The fundamentals of this code is the same from the admitUsers.php
            // To simplify development, it essentially removes the admin and returns them
            // if they are passed or stays as removed if revoked


            // Opens the json file
            $currentAdminsJson = file_get_contents('../json/admins.json');
            $currentAdminsArray = json_decode($currentAdminsJson, true);
            

            foreach ($currentAdminsArray as $infoArray){
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
            // Save the info 
            $repostAdmin = array(
                "fname" => $infoArray["fname"],
                "lname" => $infoArray["lname"],
                "email" => $infoArray["email"],
                "uname" => $infoArray["uname"],
                "pword" => $infoArray["pword"],
                "aboutYou" => $infoArray["aboutYou"]
            );
           
           
            if(array_key_exists('button1', $_POST)) {

                // Remove the user
                if (!empty($currentAdminsArray)) {
                  array_shift($currentAdminsArray);
                }

                // Update the database
                $tempBase = json_encode($currentAdminsArray, JSON_PRETTY_PRINT);
                file_put_contents('../json/admins.json', $tempBase);

                // Reopen the database
                // open the admins Json
                $adminsJson = file_get_contents('../json/admins.json');
                $adminsArray = json_decode($adminsJson, true);

                // Append
                $adminsArray[] = $repostAdmin; 

                $updatedAdmins = json_encode($adminsArray, JSON_PRETTY_PRINT);

                file_put_contents('../json/admins.json', $updatedAdmins);
                
                
                // Reload the page
                header('Location: removeUsers.php');
            }
            else if(array_key_exists('button2', $_POST)) {
                // Remove the user
                if (!empty($currentAdminsArray)) {
                    array_shift($currentAdminsArray);
                  }
  
                  // Update the database
                  $tempBase = json_encode($currentAdminsArray, JSON_PRETTY_PRINT);
                  file_put_contents('../json/admins.json', $tempBase);
  
                  // Reopen the database
                  // open the admins Json
                  $adminsJson = file_get_contents('../json/admins.json');
                  $adminsArray = json_decode($adminsJson, true);
                
                
                // Reload the page
                header('Location: removeUsers.php');
            }
            

        ?>
        <h3>Should they be admitted or denied?</h3>
        <form method="post">
        <input type="Submit" name="button1" value="Pass" />
        <input type="Submit" name="button2" value="Revoke" />
        </form>
	</article>
	

</div>


<input type="Submit" value="Return" onclick="window.location.href='member.php';">
<!--<footer id="foot">placeholder</footer>
<script src="time.js"></script>-->

</div>

</body>

</html> 
