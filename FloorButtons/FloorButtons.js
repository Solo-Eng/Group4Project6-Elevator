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

function hoverImage(floor){
    clicked = false;
    console.log("Detected Hover: " + floor);
    switch(floor) {
        case 1:
            f1.src = "img/One_rev.png";
            break;
        case 2:
            f2.src = "img/Two_rev.png";
            break;
        case 3:
            f3.src = "img/Three_rev.png";
            break;
        default:
            
    }
}

function activeImage(floor) {
    clicked = true;
    console.log("Detected Click: " + floor);
    switch(floor) {
        case 1:
            f1.src = "img/One_g.png";
            break;
        case 2:
            f2.src = "img/Two_g.png";
            break;
        case 3:
            f3.src = "img/Three_g.png";
            break;
        default:
            
    }
}

function resetImage(floor) {
    console.log("Detected Reset: " + floor);
    if (clicked == false){
        switch(floor) {
            case 1:
                f1.src = "img/One.png";
                break;
            case 2:
                f2.src = "img/Two.png";
                break;
            case 3:
                f3.src = "img/Three.png";
                break;
            default:
        }
    }
    else {
        //until we can read the current floor
        clicked = false;
        setTimeout(function () {
            resetImage(floor);
        }, 2000);
    }
}

function buttonClicked(obj){
    //posts async
    $.post("index.php",
    $(obj).serialize(),
    function(data) {
    }
    );
    return false;
}