// Configuraciones iniciales

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


let enemies = [];
let bullets = [];


// Classes

class Player {
  constructor (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.life = 3;
    this.img = new Image();
    this.img.src = 'https://toppng.com/uploads/preview/ew-free-sprites-blue-spaceship-sprayt-kosmicheskiy-korabl-11563255232nrdoiuuizj.png';
    this.img.onload = this.draw();
  }

  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveUp = () => {
    this.y -= 15;
  }

  moveDown = () => {
    this.y += 15;
  }

  crashWith(enemy) {
    return (this.x < enemy.x + enemy.w) &&
           (this.x + this.w > enemy.x) &&
           (this.y < enemy.y + enemy.w) &&
           (this.y + this.w > enemy.y)
  }
};

class Bullet {
  constructor (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = 'https://www.vhv.rs/dpng/d/251-2512365_heart-pixel-art-hd-png-download.png';
    this.img.onload = this.draw();
  }

  draw = () => {
    this.x += 2;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  crashWith(enemy) {
    return (this.x < enemy.x + enemy.w) &&
           (this.x + this.w > enemy.x) &&
           (this.y < enemy.y + enemy.w) &&
           (this.y + this.w > enemy.y);
  }
}

class Enemy {
  constructor (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = 'https://lh3.googleusercontent.com/proxy/nPIGvZA48M81DfvTKBUDakIh7oMYswHn0M3ObEmTNXnkOmaFAONev6ZG96g5SEy63IkcvQUUXbF6TMVuCMRhQoBS1j7Sj8QJ';
    this.img.onload = this.draw();
  }

  draw = () => {
    this.x -= 0.7;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  } 
};

let player = new Player(50, 175, 50, 50);


// Funciones

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const enemyGenerator = () => {
  enemies.push(new Enemy(550, Math.floor(Math.random() * 270), 30, 30));
};

const bulletGenerator = () => {
  bullets.push(new Bullet(player.x + player.w, player.y + 15, 20, 20));
};

const drawEnemy = () => {
  enemies.forEach(enemy => {
    enemy.draw();
  });
};

const drawBullet = () => {
  bullets.forEach(bullet => {
    bullet.draw();
  });
};

const checkCollisions = () => {
  enemies.forEach((enemy, ei) => {
    if(player.crashWith(enemy)) {
      enemies.splice(ei,1);
      player.life--;
    }
    bullets.forEach((bullet, bi) => {
      if(bullet.crashWith(enemy)) {
        bullets.splice(bi,1);
        enemies.splice(ei,1);
      }
    });
  });
};

const gameOver = () => {
  if (player.life <= 0) {
    clearInterval(gameInterval);
    clearInterval(enemyInterval);
  }
}

let gameInterval = setInterval(() => {
  clearCanvas();
  player.draw();
  drawEnemy();
  drawBullet();
  checkCollisions();
  gameOver();
}, 60/1000);

let enemyInterval = setInterval(() => {
  enemyGenerator();
}, 1000);


// Event listeners

window.addEventListener('keydown', e => {
  if (e.keyCode === 38) {
    player.moveUp();
  };
  if (e.keyCode === 40) {
    player.moveDown();
  };
  if (e.keyCode === 32) {
    bulletGenerator();
  };
});








// ctx.strokeStyle = 'white';
// ctx.lineWidth = 4;

// ctx.fillStyle = 'red';
// ctx.fillRect(50, 50, 100, 50);
// ctx.strokeRect(50, 50, 100, 50);

// ctx.fillStyle = 'red';
// ctx.fillRect(200, 50, 50, 50);
// ctx.strokeRect(200, 50, 100, 50);

// ctx.arc(100, 200, 50, 0, 2 * Math.PI)
// ctx.fill();
// ctx.stroke();

// let coord = [
//   {x: 350, y: 300},
//   {x: 200, y: 200},
// ];

// ctx.moveTo(50, 300);

// coord.forEach(item => {
//   ctx.lineTo(item.x, item.y)
// });

// ctx.closePath();
// ctx.stroke();