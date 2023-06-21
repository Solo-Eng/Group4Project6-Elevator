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
       // echo "<p>Hello " . $_SESSION['username']. "! You have reached the hideout!</p>";
       // echo "Click <a href='logout.php'>here</a> to log out";
       echo "<h3>Welcome " . $_SESSION['username'] . "! You have reached the Guild!</h3>";

    }
    else{
        echo "You're not supposed to be here >:(";
    }


?>


	</article>

	<article>
    <input type="Submit" value="Return to Home" onclick="window.location.href='../index.html';">
    <input type="Submit" value="View Diagnostics" onclick="window.location.href='../index.html';">
    <input type="Submit" value="Admit Users" onclick="window.location.href='../index.html';">
    <input type="Submit" value="Remove Users" onclick="window.location.href='../index.html';">
    <input type="Submit" value="Evaluate Elevator Health" onclick="window.location.href='../index.html';">
    <br>
    <br>
    <input type="Submit" value="Logout" onclick="window.location.href='logout.php';">
	</article>
	

</div>

    <img src="../img/furret.gif" width=150 height=100></video>

<!--<footer id="foot">placeholder</footer>
<script src="time.js"></script>-->

</div>

</body>

</html> 
