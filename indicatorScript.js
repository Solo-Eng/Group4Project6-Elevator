

// for changing the floor symbol
let floorIcon = document.getElementById('FloorNum');

//Check if Floor 3
let floor3check = document.getElementById('UpArrow');

//Check if Floor 1
let floor1check = document.getElementById('DownArrow');

var f1, f2, f3;

// functions change the active circle when their radio button is selected
function floor1(){
    floorIcon.id='Circle1';
	floor3check.id='UpArrow';
	document.getElementById('UpArrow').style.paddingBottom = '10px';
	document.getElementById('DownArrow').style.paddingTop = '116px';
	document.getElementById('check1').style.display = 'inherit';
	document.getElementById('check2').style.display = 'none';
}

function floor2(){
    floorIcon.id='Circle2';
	floor3check.id='UpArrow';
	floor1check.id='DownArrow';
	document.getElementById('UpArrow').style.paddingBottom = '10px';
	document.getElementById('DownArrow').style.paddingTop = '10px';
	document.getElementById('check1').style.display = 'inherit';
	document.getElementById('check2').style.display = 'inherit';
}

function floor3(){
    floorIcon.id='Circle3';
	document.getElementById('UpArrow').style.paddingBottom = '116px';
	document.getElementById('DownArrow').style.paddingTop = '10px';
	document.getElementById('check1').style.display = 'none';
	document.getElementById('check2').style.display = 'inherit';
}

// Event listeners looking at each of the radio buttons
f1 = document.getElementById('floor1Select');
f1.addEventListener('click',floor1,false);

f1 = document.getElementById('floor2Select');
f1.addEventListener('click',floor2,false);

f1 = document.getElementById('floor3Select');
f1.addEventListener('click',floor3,false);



