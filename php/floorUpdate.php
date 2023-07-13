<?php
    if(isset($_POST['newfloor'])) {
      $curFlr = update_elevatorNetwork(1, $_POST['newfloor']); 
      header('Refresh:0; url=index.php');	
    } 
    $curFlr = get_currentFloor();
    		
  ?>	