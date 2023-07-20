<?php 
	function get_currentFloor(): int {
		$current_floor = 0;
		try { $db = new PDO('mysql:host=127.0.0.1;dbname=elevator','ese','ese');}
		catch (PDOException $e){echo $e->getMessage();}

			// Query the database to display current floor
			$rows = $db->query('SELECT currentFloor FROM elevatorNetwork');
			foreach ($rows as $row) {
				$current_floor = $row[0];
			}
			return $current_floor;
	}
?>
<?php
    // Check if the AJAX request was made using POST method
	if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Get the current floor
        $curFlr = get_currentFloor();
        // Return the updated floor value as a response
        echo $curFlr;
	}	
?>