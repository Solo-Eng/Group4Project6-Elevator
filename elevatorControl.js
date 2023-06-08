
// Elevator object
const elevator = {
    isOpen: false,

    openDoor: function() {
    if (!this.isOpen) {
        this.isOpen = true;
        document.getElementByClass("elevatorDoor").classList.add("open");
        document.getElementByClass("elevatorDoor").classList.remove("close");
    } else {
    }
    },

    closeDoor: function() {
    if (this.isOpen) {
        this.isOpen = false;
        document.getElementByClass("elevatorDoor").classList.add("close");
        document.getElementByClass("elevatorDoor").classList.remove("open");
    } else {
    }
    }
};

// Get references to the buttons
var openBtn = document.getElementById("openButton");
var closeBtn = document.getElementById("closeButton");

// Attach click event listeners to the buttons
window.onload=function(){
    openBtn.addEventListener("click", function() {
        elevator.openDoor();
    });

    closeBtn.addEventListener("click", function() {
        elevator.closeDoor();
    });
}