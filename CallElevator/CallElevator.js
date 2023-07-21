upArrow = document.getElementById("UpArrow");
downArrow = document.getElementById("DownArrow");
check1 = document.getElementById("check1");
check2 = document.getElementById("check2");

upArrow.addEventListener("click", function() {
    buttonClicked(1,userFloor);
    resetArrow();
});
downArrow.addEventListener("click", function() {
    buttonClicked(1,userFloor);
    resetArrow();
});

function resetArrow() {    //waits 2s
    const myTimeout = setTimeout(resetFunction, 2000);
}


function resetFunction(){
    console.log("Reseting Arrow Image");
    check1.content = "../img/arrow-up-square";
    check2.content = "../img/arrow-down-square";
}