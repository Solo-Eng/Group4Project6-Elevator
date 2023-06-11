document.addEventListener("DOMContentLoaded", function() {
    // Elevator object
    const elevatorOC = {
        isOpen: false,

        openDoor: function() {
        if (!this.isOpen) {
            this.isOpen = true;
            const doors = document.querySelectorAll(".elevator-door");
            doors.forEach(function(doors) {
                // Perform operations on each element
                doors.classList.add("open");
                doors.classList.remove("close");
            });
        }
        },

        closeDoor: function() {
        if (this.isOpen) {
            this.isOpen = false;
            const doors = document.querySelectorAll(".elevator-door");
            doors.forEach(function(doors) {
                // Perform operations on each element
                doors.classList.remove("open");
                doors.classList.add("close");
            });
        }
        }
    };
    var openBtn = document.querySelector("#openButton");
    var closeBtn = document.querySelector("#closeButton");
    // Attach click event listeners to the buttons
    openBtn.addEventListener("click", function() {
        elevatorOC.openDoor();
    });
    
    closeBtn.addEventListener("click", function() {
        elevatorOC.closeDoor();
    });

});



