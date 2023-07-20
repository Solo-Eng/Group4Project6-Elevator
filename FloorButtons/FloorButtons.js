f1 = document.getElementById("floor1");
f2 = document.getElementById("floor2");
f3 = document.getElementById("floor3");
var clicked = false;

//event listeners to change the image when moused over
f1.addEventListener("mouseover", function () {
    hoverImage(1);
});
f2.addEventListener("mouseover", function () {
    hoverImage(2);
});
f3.addEventListener("mouseover", function () {
    hoverImage(3);
});
//event listener to change the image when clicked
f1.addEventListener("click", function () {
    activeImage(1);
});
f2.addEventListener("click", function () {
    activeImage(2);
});
f3.addEventListener("click", function () {
    activeImage(3);
});
//event listener to change the image when no longer moused over / reset
f1.addEventListener("mouseout", function () {
    resetImage(1);
});
f2.addEventListener("mouseout", function () {
    resetImage(2);
});
f3.addEventListener("mouseout", function () {
    resetImage(3);
});

function hoverImage(floorValue) {
    clicked = false;
    console.log("Detected Hover: " + floorValue);
    switch (floorValue) {
        case 1:
            console.log("here");
            f1.src = '../img/One_rev.png';
            break;
        case 2:
            f2.src = "../img/Two_rev.png";
            break;
        case 3:
            f3.src = "../img/Three_rev.png";
            break;
        default:
    }
}


function activeImage(floorValue) {
    clicked = true;
    console.log("Detected Click: " + floorValue);
    switch(floorValue) {
        case 1:
            f1.src = "../img/One_g.png";
            break;
        case 2:
            f2.src = "../img/Two_g.png";
            break;
        case 3:
            f3.src = "../img/Three_g.png";
            break;
        default:
            
    }
}

let resetTimeout;

function resetImage(floorValue) {
    console.log("Detected Reset: " + floorValue);
    if (clicked == false){
        switch(floorValue) {
            case 1:
                f1.src = "../img/One.png";
                break;
            case 2:
                f2.src = "../img/Two.png";
                break;
            case 3:
                f3.src = "../img/Three.png";
                break;
            default:
        }
    }
    else {
        console.log("Setting Timeout");
        //until we can read the current floor
        clearTimeout(resetTimeout);
        clicked = false;
        resetTimeout = setTimeout(function () {
            resetImage(floorValue);
        }, 2000);
    }
}

function buttonClicked(node_ID, new_floor){
    $.ajax({
        type: "POST", // Use POST method
        url: "FloorButtons/FloorSubmit.php",
        data: { node_ID: node_ID, new_floor: new_floor }, // Data to send to the server
        success: function(response) {
            // This function will be called when the AJAX request succeeds
            console.log("New floor updated: " + response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // This function will be called if there's an error in the AJAX request
            console.error("AJAX request failed: " + textStatus, errorThrown);
        }
    });
}