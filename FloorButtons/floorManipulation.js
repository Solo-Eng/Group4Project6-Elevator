//variables
var floor1 = document.querySelector("#floor1");
var floor2 = document.querySelector("#floor2");
var floor3 = document.querySelector("#floor3");

//changes the floor indicator icon based on the button that the user presses
function showFloor(){
    //new request
    var xmlhttpShow = new XMLHttpRequest();
    //function which is ready when the server response is ready
    xmlhttpShow.onreadystatechange = function() {
        //4 means it has finished the request, status hold 200 for OK
        if (this.readyState == 4 && this.status == 200){
            //change the icons based on responseText
            console.log(this.responseText);
        }
    };
    //connects
    xmlhttpShow.open("GET", "../php/indicatorPost.php?q=", true);
    //sends
    xmlhttpShow.send();
}
//sets an interval to update the number
function showFloorInterval(){
    //runs showFloor every 1 second
    setInterval(showFloor, 1000);
}
//can set the floor number in the database
function setFloor(flr){
    //new request
    var xmlhttpShow = new XMLHttpRequest();
    //function which is ready when the server response is ready
    xmlhttpShow.onreadystatechange = function() {
        //4 means it has finished the request, status hold 200 for OK
        if (this.readyState == 4 && this.status == 200){
            //change the icons based on responseText
            console.log(this.responseText);
        }
    };
    //connects
    xmlhttpShow.open("GET", "../php/indicatorPost.php?floor=" + flr, true);
    //sends
    xmlhttpShow.send();
}

floor1.addEventListener("click", function() {setFloor(1)}, false);    
floor2.addEventListener("click", function() {setFloor(2)}, false);    
floor3.addEventListener("click", function() {setFloor(3)}, false); 

window.addEventListener('load', function() {showFloorInterval()});