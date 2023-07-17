// AJAX function calls
function showFloor() {
    var xmlhttpShow = new XMLHttpRequest();     // Instantiate a XMLHttpRequest object
    // Function to be executed when readyState changes (server response ready)
    xmlhttpShow.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        // readyState holds the status of the XMLHttpRequest (4 means finished request and server response is ready)
        // status hold 200 for OK
        console.log(this.responseText);                                             
                                            // responseText string returned from server in 'echo' statement
                                            // THIS IS A GLOBAL VARIABLE SINCE DECLARED IN HTML FILE - Convert text string to javascript array in JSON format 
                                            // 'this' refers to the xmlhttp object and responseText is the property that contains the text returned from the server
      } 
    };
    xmlhttpShow.open("GET", "../php/floorUpdate.php?q=", true);  // Open connection
    xmlhttpShow.send();                                      // Send request
}
function showFloorInterval() {    // Automatic updates every 5 s
    setInterval(showFloor, 1000);
}
window.addEventListener('load', function() {showFloorInterval}, false);  // Button updates 250 ms after pressed