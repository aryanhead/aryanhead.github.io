const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = { x: 0, y: 0 };

document.onkeydown = function(e) {
  if (e.keyCode === 37) {
    player.x -= 10;
  } else if (e.keyCode === 38) {
    player.y -= 10;
  } else if (e.keyCode === 39) {
    player.x += 10;
  } else if (e.keyCode === 40) {
    player.y += 10;
  }
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(player.x, player.y, 50, 50);
  requestAnimationFrame(draw);
}

draw();
