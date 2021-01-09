function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    
    return {
      'total': t,
      
      'seconds': seconds
    };
  }
  
  /* timer */
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= -1) {
        clearInterval(timeinterval);
        alert('counter ended!');
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) +  10 * 1000);

  initializeClock('clockdiv', deadline);

/*game*/
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;


const keys = []


const player = {
    x: 50,
    y: 50,
    width: 64,
    height: 64,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerSprite = new Image();
// left_turtle0 = document.getElementById('left_turtle');
playerSprite.src = "./images/left_turtle/left_turtle0.png";

const background = new Image();
background.src = "green.png";

// const playerSprite = new Image();
// playerSprite.src = "unknown.png";

function drawSprite(img, sX, sY, sW, sH){
    ctx.drawImage(img, sX, sY, sW, sH);
    
}



function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // ctx.drawSprite(playerSprite, 0, 0, player.width, player.height, 0, 0);
    drawSprite(playerSprite, player.x, player.y, player.width, player.height);
    movePlayer();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
});

function movePlayer(){
    if(keys[37] && player.x > 0){
        player.x -= player.speed;
    }
    if(keys[39] && player.x < canvas.width - player.width){
        player.x += player.speed;
    }
}