#include "../include/pcanFunctions.h"
#include "../include/databaseFunctions.h"
#include "../include/mainFunctions.h"

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> 
#include <iostream>

using namespace std;


// ******************************************************************

int main() {

	int choice; 
	int ID; 
	int data; 
	int numRx;
	int floorNumber = 1, prev_floorNumber = 1;
	int floorNumArray[3] = {1,1,1};
	int diff2 = 0, diff1 = 0;
	int dist, currFloor, tf;


	while(1) {
		system("@cls||clear");
		choice = menu(); 
		switch (choice) {
			case 1: 
				ID = chooseID();		// user to select ID depending on intended recipient
				data = chooseMsg();		// user to select message data
				pcanTx(ID, data);		// transmit ID and data 
				db_setFloorNum(FloorFromHex(data)); 		// change floor number in database ** NEW **
				break; 
				
			case 2:
				printf("\nHow many messages to receive? ");
				scanf("%d", &numRx);
				pcanRx(numRx);
				break;
				
			case 3:
				printf("\nNow listening to commands from the website - press ctrl-z to cancel\n");
				// Synchronize elevator db and CAN (start at 1st floor)
				pcanTx(ID_SC_TO_EC, GO_TO_FLOOR1);
				db_setFloorNum(1);
				
				while(1){
					// Take the requested Floor from the database			
					floorNumArray[0] = db_getFloorNum();	
					
					// Calculate the difference between 2nd and 3rd positions
					diff1 = floorNumArray[2] - floorNumArray[1];
					diff1 = abs(diff1);
										
					// a printf for debugging
					printf("\n%d %d %d\n",floorNumArray[0],floorNumArray[1],floorNumArray[2]);

					// First check if the was a change in requested floors from 1 to 2
					if(floorNumArray[1] != floorNumArray[0]){

						// Check if the difference between floors is large
						// If so, the floor-2-stop is possible
						if ( (diff1 == 2) && ()){
							// Calculate the difference between the first 2 
							// Also gives direction of elevator
							diff2 = floorNumArray[1] - floorNumArray[0];
							


							dist = getDistance();
							if(diff2 > 0){
								//going up
								if(dist < 1000){
									// hasn't passed floor 2
									tf =1;
								}
								else{
									tf=0;
								}
						
							}
							else if(diff2 < 0){
								//going down
								if(dist > 500){
									// hasn't passed floor 2
									tf =1;
								}
								else{
									tf=0;
								}
							}

							diff2 = abs(diff2);

							// Make sure the difference between the newest floor
							// and the previous floor is short
							if(diff2 == 1){
								// Send car to the new floor
								pcanTx(ID_SC_TO_EC, HexFromFloor(floorNumArray[0]));
								
								// Wait for new passengers
								// Continue with request
								sleep(2);								
								pcanTx(ID_SC_TO_EC, HexFromFloor(floorNumArray[1]));						

								// make sure tf = 0;
								tf = 0;	
							}

						}
						else{
							// Send to requested floor
							pcanTx(ID_SC_TO_EC, HexFromFloor(floorNumArray[0]));
						}

					}
					
					// Set the database
					// Will set currentFloor in the database
					db_setFloorNum(floorNumArray[0]);

					// shift the queue
					floorNumArray[2] = floorNumArray[1];
					floorNumArray[1] = floorNumArray[0];
					sleep(1);


				}
				break;
				
			case 4: 
				return(0);
			
			default:
				printf("Error on input values");
				sleep(3);
				break;
		}
		sleep(1);					// delay between send/receive
	}
	
	return(0);
}






	
