<!DOCTYPE html>
	<?php
		session_start();    
		if (!isset($_SESSION['username']))	{
			header('Location: login.html');
			exit(); // <-- terminates the current script
		}
	?>	
	<?php
		if (isset($_SESSION['username']))	{
			echo "<h3>Welcome " . $_SESSION['username'] . "! You have reached the elevator controlling page!</h3>";
		}
	?>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="This is the homepage of our project" />
		<meta name="robots" content="noindex nofollow" />
		<meta http-equiv="author" content="Ben Allen, Liam Cain, Guneet Matharu, Nickolas Raghunath" />
		<meta http-equiv="pragma" content="no-cache" />
		<link rel="icon" type="image/x-icon" href="img/Spheal.ico">
		<link rel="stylesheet" type="text/css" href="style1.css">
		<link rel="stylesheet" type="text/css" href="FloorButtons/FloorButtons.css">
		<link rel="stylesheet" type="text/css" href="floorIndication/FloorIndication.css">
		<link rel="stylesheet" type="text/css" href="UserFloor/UserFloor.css">
		<link rel="stylesheet" type="text/css" href="CallElevator/CallElevator.css">
		<script type="text/javascript" src="script1.js"></script>
		<script type="text/javascript" src="elevatorControl.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	</head>
	<body>
    	<!-- Until "END COMMON" common amongst all tabs on top-->
    	<div class="banner">
      	<h1>
        	<img src="img/SphealBounce.gif"></video>
        	Project 6 Group 4
  		</h1>
		</div>
		<!-- This is for the tabs at the top of the page-->
		<div class="tab">
		<!--  
			Given an onclick event, this will redirect to the Javascript
			potion where the tab will redirect to another page
		-->
		<button onclick="openTab(event, 'Elevator UI')">Elevator UI</button>
		<button onclick="openTab(event, 'Documents')">Documents</button>
		<button onclick="openTab(event, 'About Us')">About Us</button>
		<button onclick="openTab(event, 'Project Details')">Project Details</button>
		</div>
		<!-- END COMMON-->
		<div id="page">
			<header>
				<h3 id="time">Current Time</h3>
				<script src="time.js"></script>
			</header>
			<div id="content">

				<!-- The UI for the elevator-->
				<h3>Elevator UI</h3>
				<p>Please pick your floor:</p>

				<form action="floorDatabase.php" method="post" id="floorSelect">

					<!-- Designated type, ID, name, and value for each button-->
					<input type="radio" id="floor1Select" name="floor" value="1" checked="checked">
					<label for="floor1">Floor 1</label><br>
					<input type="radio" id="floor2Select" name="floor" value="2">
					<label for="floor2">Floor 2</label><br>  
					<input type="radio" id="floor3Select" name="floor" value="3">
					<label for="floor3">Floor 3</label><br><br>

					<!--Pressing the Submit button will submit this to the form-->
					<input type="submit" value="Submit">
	
				</form>
				<div class="grid-container">
					<div class="grid-item"></div>
					<div class="grid-item FloorNum" id ="FloorNum1">
						<button type="button" class="image-button">
							<img src="img/1-circle-fill.svg" alt="Image">
						</button>
					</div>
					<div class="grid-item FloorNum" id ="FloorNum2">
						<button type="button" class="image-button">
							<img src="img\2-circle-fill.svg" alt="Image">
						</button>
					</div>
					<div class="grid-item FloorNum" id ="FloorNum3">
						<button type="button" class="image-button">
							<img src="img\3-circle-fill.svg" alt="Image">
						</button>
					</div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<!-- New Row Start-->
					<div class="grid-item"></div>
					<div class="grid-item elevator-door door-left"></div>
					<div class="grid-item elevator-door door-right"></div>
					<div class="grid-item">
						<img src="img/Elevator_icon_arrow.stop_1.png" alt="Image" id = "floorind">
					</div>
					<div class="grid-item container2" id="one">
						<form onclick="return buttonClicked(1,1)" method="POST" Id="floorNumber1">
							<button type="button" class="image-button">
								<img src="img/One.png" alt="Image" id = "floor1">
							</button>
						</form>
					</div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<!-- New Row Start-->
					<div class="grid-item"></div>
					<div class="grid-item container2" id="UpArrow">
						<input class="hidablebutton1" id="check1" type="checkbox">
					</div>
					<div class="grid-item container2" id="two">
					<form onclick="return buttonClicked(1,2)" method="POST" Id="floorNumber2">
							<button type="button" class="image-button">
								<img src="img/Two.png" alt="Image" Id = "floor2">
							</button>
						</form>
					</div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<!-- New Row Start-->
					<div class="grid-item"></div>
					<div class="grid-item container2" id="DownArrow">
						<input class="hidablebutton2" id="check2" type="checkbox">
					</div>
					<div class="grid-item container2" id="three">
						<form onclick="return buttonClicked(1,3)" method="POST" Id="floorNumber3" value="3";>
							<button type="button" class="image-button">
								<img src="img/Three.png" alt="Image" Id = "floor3">
							</button>
						</form>
					</div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<!-- New Row Start-->
					<div class="grid-item"></div>
					<div class="grid-item container" id="openButton">
						<input type="checkbox" id="jsOpenButton">
					</div>
					<div class="grid-item container" id="closeButton">
						<input type="checkbox" id="jsCloseButton">
					</div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<div class="grid-item"></div>
					<!-- New Row Start-->
				</div>
				<script src="floorIndication/indicatorScript.js"></script>
				<script type="text/javascript" src="floorIndication/FloorIndication.js"></script>
				<script type="text/javascript" src="FloorButtons/FloorButtons.js"></script>
				<script type="text/javascript" src="UserFloor/UserFloor.js"></script>
				<!--Below is REQUIRED to be below FloorButtons and UserFloor-->
				<script type="text/javascript" src="CallElevator/CallElevator.js"></script>
				<p>Wanna know about the developers? <a href="about.html">Click here</a></p><br/>
				<a href="php/logout.php">Log Out</a>
			</div>
			<footer id="foot">placeholder</footer>
			<script src="time.js"></script>
    	</div>
  	</body>
</html>