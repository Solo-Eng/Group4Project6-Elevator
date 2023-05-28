// Just random for now

let x = Math.floor((Math.random() * 3) + 1);

if ( x == 1){
    var msg = '<div class="container" id="Circle1"> <img type="floorIndicator"></img> </div>';
}
if ( x == 2){
    var msg = '<div class="container" id="Circle2"> <img type="floorIndicator"></img> </div>';
}
if ( x == 3){
    var msg = '<div class="container" id="Circle3"> <img type="floorIndicator"></img> </div>';
}


var elemt = document.getElementById('image');
elemt.innerHTML = msg;    
