
<?php
  if(isset($_POST['newfloor'])) {
    $curFlr = update_elevatorNetwork(2, $_POST['newfloor']); 
    header('Refresh:0; url=index.php');	
  } 
  $curFlr = get_currentFloor();
  echo json_encode($curFlr);	
?>