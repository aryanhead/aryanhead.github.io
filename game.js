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

let blocks = [
  { x: 100, y: 100, type: "dirt" },
  { x: 150, y: 150, type: "stone" },
  { x: 200, y: 200, type: "wood" }
];

let inventory = [];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(player.x, player.y, 50, 50);

  blocks.forEach(block => {
    if (block.type === "dirt") {
      ctx.fillStyle = "brown";
    } else if (block.type === "stone") {
      ctx.fillStyle = "gray";
    } else if (block.type === "wood") {
      ctx.fillStyle = "brown";
    }
    ctx.fillRect(block.x, block.y, 50, 50);
  });

  requestAnimationFrame(draw);
}

document.onmousedown = function(e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  blocks.forEach((block, index) => {
    if (
      mouseX > block.x &&
      mouseX < block.x + 50 &&
      mouseY > block.y &&
      mouseY < block.y + 50
    ) {
      inventory.push(block.type);
      blocks.splice(index, 1);
    }
  });
};

draw();
