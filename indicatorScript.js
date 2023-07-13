

// for changing the floor symbol
let floorIcon = document.getElementById('FloorNum');

//Check if Floor 3
let floor3check = document.getElementById('UpArrow');

//Check if Floor 1
let floor1check = document.getElementById('DownArrow');

var f1, f2, f3;

var audio1 = new Audio('floor1.mp3');
var audio2 = new Audio('floor2.mp3');
var audio3 = new Audio('floor3.mp3');


// functions change the active circle when their radio button is selected
window.onload = function floor0(){
    floorIcon.id='Circle1';
	floor3check.id='UpArrow';
	document.getElementById('UpArrow').style.paddingBottom = '10px';
	document.getElementById('DownArrow').style.paddingTop = '116px';
	document.getElementById('check1').style.display = 'inherit';
	document.getElementById('check2').style.display = 'none';
}

function floor1(){
    floorIcon.id='Circle1';
	floor3check.id='UpArrow';
	document.getElementById('UpArrow').style.paddingBottom = '10px';
	document.getElementById('DownArrow').style.paddingTop = '116px';
	document.getElementById('check1').style.display = 'inherit';
	document.getElementById('check2').style.display = 'none';
	audio1.play();
	audio2.pause();
	audio2.currentTime=0;
	audio3.pause();
	audio3.currentTime=0;
}

function floor2(){
    floorIcon.id='Circle2';
	floor3check.id='UpArrow';
	floor1check.id='DownArrow';
	document.getElementById('UpArrow').style.paddingBottom = '10px';
	document.getElementById('DownArrow').style.paddingTop = '10px';
	document.getElementById('check1').style.display = 'inherit';
	document.getElementById('check2').style.display = 'inherit';
	audio2.play();
	audio1.pause();
	audio1.currentTime=0;
	audio3.pause();
	audio3.currentTime=0;
}

function floor3(){
    floorIcon.id='Circle3';
	document.getElementById('UpArrow').style.paddingBottom = '116px';
	document.getElementById('DownArrow').style.paddingTop = '10px';
	document.getElementById('check1').style.display = 'none';
	document.getElementById('check2').style.display = 'inherit';
	audio3.play();
	audio1.pause();
	audio1.currentTime=0;
	audio2.pause();
	audio2.currentTime=0;
}

// Event listeners looking at each of the radio buttons

f1 = document.getElementById('floor1Select');
f1.addEventListener('click',floor1,false);

f1 = document.getElementById('floor2Select');
f1.addEventListener('click',floor2,false);

f1 = document.getElementById('floor3Select');
f1.addEventListener('click',floor3,false);

function submitNumber1(){
	document.getElementById("floorNumber1").submit();
}
function submitNumber2(){
	document.getElementById("floorNumber2").submit();
}
function submitNumber3(){
	document.getElementById("floorNumber3").submit();
}

function showFloorInterval() {    // Automatic updates every 250 ms
	console.log("showFloorInterval");
	setInterval(showFloor, 5000);
}

function showFloor() {
	console.log("showFloor");
	var xmlhttpShow = new XMLHttpRequest();     // Instantiate a XMLHttpRequest object
	// Function to be executed when readyState changes (server response ready)
	xmlhttpShow.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			// readyState holds the status of the XMLHttpRequest (4 means finished request and server response is ready)
			// status hold 200 for OK
			console.log("showFloor->if(this.readystate)");

		} };
	xmlhttpShow.open("GET", "index.php?q=", true);  // Open connection
	xmlhttpShow.send();                                       // Send request
		
}
window.addEventListener('load', function() {showFloorInterval()}, false);