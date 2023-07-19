//read current floor based on a timer
function timedRefresh(){
    $.ajax({
        type: "POST", // Use POST method
        url: "floorIndication/FloorIndication.php",
        data: {}, // Data to send to the server
        success: function(response) {
          // This function will be called when the AJAX request succeeds
          console.log("Current Floor: " + response);
          //call function to handle response
          indicationImage(response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // This function will be called if there's an error in the AJAX request
          console.error("AJAX request failed: " + textStatus, errorThrown);
        }
    });
}
function refreshInterval() {    // Automatic updates every 5 s
    setInterval(timedRefresh, 100);
}

var fI = document.querySelector("#floorind"); //change this to floorind when doing images
var prevFloor = 1;

function indicationImage(floor){
    switch (floor) {
        case "1":
            if (prevFloor < floor ){
                fI.src = "img/Elevator_icon_arrow.up_1.png";
            }
            else {
                fI.src = "img/Elevator_icon_arrow.stop_1.png";
            }
            break;
        case "2":
            if (prevFloor < floor ){
                fI.src = "img/Elevator_icon_arrow.up_2.png";
            }
            else if (prevFloor > floor) {
                fI.src = "img/Elevator_icon_arrow.down_2.png";
            }
            else {
                fI.src = "img/Elevator_icon_arrow.stop_2.png";
            }
            break;
        case "3":
            if (prevFloor > floor ){
                fI.src = "img/Elevator_icon_arrow.down_3.png";
            }
            else {
                fI.src = "img/Elevator_icon_arrow.stop_3.png";
            }
            break;
        default:
    }
    prevFloor = floor;
}

window.addEventListener('load', function() {refreshInterval(3000)}, false);