<?php
session_start(); //starts a session
//if posted, update the elevator network
  if(isset($_POST['newfloor'])) {
    $curFlr = update_elevatorNetwork(1, $_POST['newfloor']); 
    header('Refresh:0; url=index.php');	
  }
  //variable for communication with js
  $q = $_REQUEST["q"];
  //get the current floor
  $curFlr = get_currentFloor();
  if(!empty($curFlr)) {
    // Set the value of the floor if receive the 'floor' key to the value sent here
    $_SESSION['floor'] = $curFlr;        // Store this in the database later
  } 
  echo json_encode($_SESSION['floor']);	
?>