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
}

// Other files (enemy.js, bullet.js, physics.js, ui.js) will follow a similar modular pattern.
