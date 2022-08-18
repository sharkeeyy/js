/**  @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 700;
const CANVAS_HEIGHT = canvas.height = 700;

let gameFrame = 0;
const ENEMIES_COUNT = 50;
const enemiesArray = [];

class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = './img/enemy1.png';
        this.x = Math.random() * 400;
        this.y = Math.random() * 700;
        this.spriteWidth = 293;
        this.spriteHeigth = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeigth / 2.5;
        this.speed = Math.random() * 4 - 2;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }

    update() {
        this.x += this.speed;
        this.y += this.speed;
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeigth, 
            this.x, this.y, this.width, this.height);
        
    }
}

class Enemy2 {
    constructor() {
        this.image = new Image();
        this.image.src = './img/enemy2.png';
        this.x = Math.random() * 400;
        this.y = Math.random() * 700;
        this.spriteWidth = 266;
        this.spriteHeigth = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeigth / 2.5;
        this.speed = Math.random() * 4 + 1;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 7;
    }

    update() {
        this.x -= this.speed;
        this.y += this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = CANVAS_WIDTH;
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeigth, 
            this.x, this.y, this.width, this.height);
        
    }
}

class Enemy3 {
    constructor() {
        this.image = new Image();
        this.image.src = './img/enemy3.png';
        this.x = Math.random() * 700;
        this.y = Math.random() * 700;
        this.spriteWidth = 218;
        this.spriteHeigth = 177;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeigth / 2.5;
        this.speed = Math.random() * 4 + 1;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 500;
        this.angleSpeed = Math.random() * 1 + 0.5;
        this.curve = Math.random() * 300 + 50;
    }

    update() {
        this.x = CANVAS_WIDTH / 2 * Math.sin(this.angle * Math.PI / 90) - this.width / 2 + CANVAS_WIDTH / 2;
        this.y = CANVAS_HEIGHT / 2 * Math.cos(this.angle * Math.PI / 180) - this.height / 2 + CANVAS_HEIGHT / 2;
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = CANVAS_WIDTH;
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeigth, 
            this.x, this.y, this.width, this.height);
        
    }
}

class Enemy4 {
    constructor() {
        this.image = new Image();
        this.image.src = './img/enemy3.png';
        this.x = Math.random() * 700;
        this.y = Math.random() * 700;
        this.spriteWidth = 218;
        this.spriteHeigth = 177;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeigth / 2.5;
        this.speed = Math.random() * 4 + 1;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 500;
        this.angleSpeed = Math.random() * 1 + 0.5;
        this.curve = Math.random() * 300 + 50;
    }

    update() {
        this.x = CANVAS_WIDTH / 2 * Math.sin(this.angle * Math.PI / 90) - this.width / 2 + CANVAS_WIDTH / 2;
        this.y = CANVAS_HEIGHT / 2 * Math.cos(this.angle * Math.PI / 180) - this.height / 2 + CANVAS_HEIGHT / 2;
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = CANVAS_WIDTH;
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeigth, 
            this.x, this.y, this.width, this.height);
        
    }
}

for (i = 0; i < ENEMIES_COUNT; i++) {
    enemiesArray.push(new Enemy4());
}

function animate() {
    ctx.clearRect(0, 0 , CANVAS_WIDTH, CANVAS_HEIGHT);

    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();

