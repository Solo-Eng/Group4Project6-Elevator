<?php
	function update_elevatorNetwork(int $node_ID, int $new_floor =1): int {
		$db1 = new PDO('mysql:host=127.0.0.1;dbname=elevator','ese','ese');
		$query = 'UPDATE elevatorNetwork 
				SET requestedFloor = :floor
				WHERE nodeID = :id';
		$statement = $db1->prepare($query);
		$statement->bindvalue('floor', $new_floor);
		$statement->bindvalue('id', $node_ID);
		$statement->execute();	

        echo "<script>console.log('" . $new_floor . "');</script>";
		
		return $new_floor;
	}

	
	// Check if the AJAX request was made using POST method
	if ($_SERVER["REQUEST_METHOD"] === "POST") {
		// Check if the required parameters exist in the POST data
		if (isset($_POST["node_ID"]) && isset($_POST["new_floor"])) {
			$node_ID = intval($_POST["node_ID"]);
			$new_floor = intval($_POST["new_floor"]);

			// Call the update_elevatorNetwork function to update the current floor
			$updatedFloor = update_elevatorNetwork($node_ID, $new_floor);

			// Return the updated floor value as a response
			echo $updatedFloor;
		} else {
			// Return an error message if required parameters are missing
			echo "Missing parameters in the AJAX request.";
		}
	}
?>