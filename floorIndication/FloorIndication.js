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

window.addEventListener('load', function() {refreshInterval(3000)}, false);