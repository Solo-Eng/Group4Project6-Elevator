<?php
	function update_elevatorNetwork(int $node_ID, int $new_floor =1): int {
		date_default_timezone_set('America/New_York');
        $date1 = date('Y-m-d');
        $time1 = date('H:i:s');


		$db1 = new PDO('mysql:host=127.0.0.1;dbname=elevator','ese','ese');
		$query = 'UPDATE elevatorNetwork 
				SET requestedFloor = :floor,
				date = :date1,
                time = :time1
				WHERE nodeID = :id';
		$statement = $db1->prepare($query);
		$statement->bindvalue('floor', $new_floor);
		$statement->bindvalue('id', $node_ID);
		$statement->bindValue('date1',$date1);
        $statement->bindValue('time1',$time1);
		$statement->execute();	
		
		return $new_floor;
	}
?>
<?php 
	function get_currentFloor(): int {
		try { 
			$db = new PDO('mysql:host=127.0.0.1;dbname=elevator','ese','ese');
		}
		catch (PDOException $e){
			echo $e->getMessage();
		}

			// Query the database to display current floor
			$rows = $db->query('SELECT currentFloor FROM elevatorNetwork');
			foreach ($rows as $row) {
				$current_floor = $row[0];
			}
			return $current_floor;
	}
?>

