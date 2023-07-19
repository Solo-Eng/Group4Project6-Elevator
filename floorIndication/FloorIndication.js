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

var fI = document.querySelector("#floorind");
var prevFloor = 1;

function indicationImage(floor){
    if (prevFloor < floor ){
        switch (prevFloor) {
            case "1":
                fI.src = "img/Elevator_icon_arrow.up_1.png";
                floorTraversing(floor);
                floorDisplay(floor);
                break;
            case "2":
                fI.src = "img/Elevator_icon_arrow.up_2.png";
                floorTraversing(floor);
                floorDisplay(floor);
                break;
            default:
        }
    }
    else if (prevFloor > floor) {
        switch (prevFloor) {
            case "2":
                fI.src = "img/Elevator_icon_arrow.down_2.png";
                floorTraversing(floor);
                floorDisplay(floor);
                break;
            case "3":
                fI.src = "img/Elevator_icon_arrow.down_3.png";
                floorTraversing(floor);
                floorDisplay(floor);
                break;
            default:
        }
    }
    else {
        switch (prevFloor) {
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
    prevFloor = floor;
}

function floorDisplay(floor){
    switch (floor){
        case "1":
            floor1();
            break;
        case "2":
            floor2();
            break;
        case "3":
            floor3();
            break;
        default:
    }
}

var audio1 = new Audio('floor1.mp3');
var audio2 = new Audio('floor2.mp3');
var audio3 = new Audio('floor3.mp3');

function floorTraversing(floor){
    
    switch(floor) {
        case "1":
            //play audio
            audio1.play();
            audio2.pause();
            audio2.currentTime=0;
            audio3.pause();
            audio3.currentTime=0;
            break;
        case "2":
            //play audio
            audio2.play();
            audio1.pause();
            audio1.currentTime=0;
            audio3.pause();
            audio3.currentTime=0;
            break;
        case "3":
            //play audio
            audio3.play();
            audio1.pause();
            audio1.currentTime=0;
            audio2.pause();
            audio2.currentTime=0;
            break;
        default:
    }
}

window.addEventListener('load', function() {refreshInterval(3000)}, false);