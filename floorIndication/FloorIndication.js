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
    setInterval(timedRefresh, 1000);
}

var fI = document.querySelector("#floorind"); //change this to floorind when doing images

function indicationImage(floor){
    switch (floor) {
        case "1":
            fI.src = "img/Elevator_icon_arrow.stop_1.png";
            break;
        case "2":
            fI.src = "img/Elevator_icon_arrow.stop_2.png";
            break;
        case "3":
            fI.src = "img/Elevator_icon_arrow.stop_3.png";
            break;
        default:
    }
}

window.addEventListener('load', function() {refreshInterval(3000)}, false);