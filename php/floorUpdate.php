<?php
  if(isset($_POST['newfloor'])) {
    $curFlr = update_elevatorNetwork(1, $_POST['newfloor']); 
    header('Refresh:0; url=index.php');	
  }
  $q = $_REQUEST["q"];
  $curFlr = get_currentFloor();
  echo json_encode($curFlr);	
?>