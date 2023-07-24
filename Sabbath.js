var Sabbath = document.getElementById('SabbathID')
let looper = false;
var randnum;
var set = 0;
function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function loop(){
  if(looper){
    looper = false;
    console.log('looping stopped');
    clearInterval(set);
    Sabbath.style.backgroundColor = '#e6e6e6'
    set = 0;
  } else {
      looper = true;
      console.log('looping started');
      randomFloor();
  }
  
}

function randomFloor(){

  if(looper){
    randnum = getRandomArbitrary(0, 3);
      buttonClicked(1, randnum);
      console.log(randnum);
      
      console.log('Function is running');
      Sabbath.style.backgroundColor = '#00ff00';
      if(set == 0){
        set = setInterval(randomFloor, 5000);
      }
  }
  
  //setTimeout(randomFloor(), 1000);
}


Sabbath.addEventListener('click', function(){
  loop();});
