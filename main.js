// main.js - Initializes the game
import { Game } from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
    const game = new Game();
    game.start();
});

// game.js - Main game loop
import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Bullet } from "./bullet.js";
import { Physics } from "./physics.js";
import { UI } from "./ui.js";

export class Game {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.player = new Player(this);
        this.enemies = [];
        this.bullets = [];
        this.running = false;
        this.physics = new Physics(this);
        this.ui = new UI(this);

        document.addEventListener("click", () => this.player.shoot());
    }

    start() {
        this.running = true;
        this.loop();
    }

    loop() {
        if (!this.running) return;
        this.update();
        this.render();
        requestAnimationFrame(() => this.loop());
    }

    update() {
        this.player.update();
        this.enemies.forEach(enemy => enemy.update());
        this.bullets.forEach(bullet => bullet.update());
        this.physics.checkCollisions();
        this.bullets = this.bullets.filter(bullet => !bullet.offScreen);
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.render(this.ctx);
        this.enemies.forEach(enemy => enemy.render(this.ctx));
        this.bullets.forEach(bullet => bullet.render(this.ctx));
        this.ui.render(this.ctx);
    }
}

// player.js - Handles player movement and shooting
export class Player {
    constructor(game) {
        this.game = game;
        this.x = 100;
        this.y = 100;
        this.speed = 5;
    }
    update() {
        // Handle movement logic
    }
    render(ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 20, 20);
    }
    shoot() {
        this.game.bullets.push(new Bullet(this.game, this.x + 10, this.y));
    }
}

// bullet.js - Handles bullet movement and rendering
export class Bullet {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.width = 5;
        this.height = 10;
        this.offScreen = false;
    }
    update() {
        this.y -= this.speed;
        if (this.y < 0) this.offScreen = true;
    }
    render(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Other files (enemy.js, physics.js, ui.js) will follow a similar modular pattern.
