<?php
    class UserInterface{

        public $currentFloor;
        public $requestFloor;
        public $distance;

        function getCurrentFloor(){
		    try { $db = new PDO('mysql:host=127.0.0.1;dbname=elevator','ese','ese');}
	        catch (PDOException $e){echo $e->getMessage();}

			// Query the database to display current floor
			$rows = $db->query('SELECT currentFloor FROM elevatorNetwork');
			foreach ($rows as $row) {
				$this->currentFloor = $row[0];
			}
            return $this->currentFloor;
        }

        function updateRequestedFloor($nodeID, $requestedFloor){

			try {
				if ($nodeID < 0){
					throw new Exception('node_ID must be positive');
				}
				else if($requestedFloor < 0 || $requestedFloor > 3){
					throw new Exception('requested floor must be between 1 and 3');
				}
				else {
					$this->requestFloor = $requestedFloor;
					$db1 = new PDO('mysql:host=127.0.0.1;dbname=elevator','ese','ese');
					$query =   'UPDATE elevatorNetwork 
								SET requestedFloor = :floor
								WHERE nodeID = :id';
					$statement = $db1->prepare($query);
					$statement->bindvalue('floor', $new_floor);
					$statement->bindvalue('id', $node_ID);
					$statement->execute();	
					echo "<script>console.log('" . $new_floor . "');</script>";
				}
			}
            catch (Exception $e){
				echo e->getMessage();
			}
		    return $this->requestFloor;
        }

        function getDistance(){
            try { $db = new PDO('mysql:host=127.0.0.1;dbname=elevator','ese','ese');}
	        catch (PDOException $e){echo $e->getMessage();}

			// Query the database to display current floor
			$rows = $db->query('SELECT dist FROM elevatorNetwork');
			foreach ($rows as $row) {
				$this->distance = $row[0];
			}
            return $this->distance;
        }
    }
?>