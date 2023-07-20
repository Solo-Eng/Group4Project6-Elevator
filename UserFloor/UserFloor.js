var f1, f2, f3;

// Event listeners looking at each of the buttons

f1 = document.getElementById('FloorNum1');
f1.addEventListener('click',floor1,false);

f2 = document.getElementById('FloorNum2');
f2.addEventListener('click',floor2,false);

f3 = document.getElementById('FloorNum3');
f3.addEventListener('click',floor3,false);

// functions change the active circle when their radio button is selected
window.onload = function floor0(){
	document.getElementById('UpArrow').style.paddingBottom = '10px';
	document.getElementById('DownArrow').style.paddingTop = '116px';
	document.getElementById('check1').style.display = 'inherit';
	document.getElementById('check2').style.display = 'none';
}

function floor1(){
	document.getElementById('UpArrow').style.paddingBottom = '10px';
	document.getElementById('DownArrow').style.paddingTop = '116px';
	document.getElementById('check1').style.display = 'inherit';
	document.getElementById('check2').style.display = 'none';
	
}

function floor2(){
	document.getElementById('UpArrow').style.paddingBottom = '10px';
	document.getElementById('DownArrow').style.paddingTop = '10px';
	document.getElementById('check1').style.display = 'inherit';
	document.getElementById('check2').style.display = 'inherit';
	
}

function floor3(){
	document.getElementById('UpArrow').style.paddingBottom = '116px';
	document.getElementById('DownArrow').style.paddingTop = '10px';
	document.getElementById('check1').style.display = 'none';
	document.getElementById('check2').style.display = 'inherit';
}