

// for changing the floor symbol
let floorIcon = document.getElementById('FloorNum');

var f1, f2, f3;

// functions change the active circle when their radio button is selected
function floor1(){
    floorIcon.id='Circle1';
}

function floor2(){
    floorIcon.id='Circle2';
}

function floor3(){
    floorIcon.id='Circle3';
}

// Event listeners looking at each of the radio buttons
f1 = document.getElementById('floor1Select');
f1.addEventListener('click',floor1,false);

f1 = document.getElementById('floor2Select');
f1.addEventListener('click',floor2,false);

f1 = document.getElementById('floor3Select');
f1.addEventListener('click',floor3,false);



