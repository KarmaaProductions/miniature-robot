// game.js - Main game loop
import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Bullet } from "./bullet.js";
import { Particle } from "./particle.js";
import { Physics } from "./physics.js";
import { UI } from "./ui.js";
import { setupCanvas } from "./highResCanvas.js";
import { applyMotionBlur } from "./motionBlur.js";

export class Game {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = setupCanvas(this.canvas);
        this.player = new Player(this);
        this.enemies = [];
        this.bullets = [];
        this.particles = [];
        this.running = false;
        this.physics = new Physics(this);
        this.ui = new UI(this);

        // Spawn initial enemies
        for (let i = 0; i < 5; i++) {
            this.enemies.push(new Enemy(this));
        }

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
        this.particles.forEach(particle => particle.update());
        this.physics.checkCollisions();
        this.bullets = this.bullets.filter(bullet => !bullet.offScreen);
        this.particles = this.particles.filter(particle => particle.life > 0);
    }

    render() {
        applyMotionBlur(this.ctx, this.canvas); // Add motion blur effect
        this.player.render(this.ctx);
        this.enemies.forEach(enemy => enemy.render(this.ctx));
        this.bullets.forEach(bullet => bullet.render(this.ctx));
        this.particles.forEach(particle => particle.render(this.ctx));
        this.ui.render(this.ctx);
    }
}
