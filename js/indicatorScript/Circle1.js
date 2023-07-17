// for changing the floor symbol
let floorIcon = document.getElementById('FloorNum');
//Check if Floor 1
let floor1check = document.getElementById('DownArrow');
//audio
var audio1 = new Audio('floor1.mp3');
//
f1 = document.getElementById('floor1Select');
//changes floor 1
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

