// main.js - Initializes and runs the game
import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Bullet } from "./bullet.js";
import { Particle } from "./particle.js";
import { setupCanvas } from "./highResCanvas.js";
import { applyMotionBlur } from "./motionBlur.js";
import { Physics } from "./physics.js";
import { UI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    const ctx = setupCanvas(canvas);

    const player = new Player({ canvas, ctx });
    const enemies = [];
    const bullets = [];
    const particles = [];
    const physics = new Physics({ canvas, ctx, player, enemies, bullets });
    const ui = new UI({ ctx });
    let running = false;

    // Spawn initial enemies
    for (let i = 0; i < 5; i++) {
        enemies.push(new Enemy({ canvas }));
    }

    // Start the game loop
    function start() {
        running = true;
        loop();
    }

    // Game loop
    function loop() {
        if (!running) return;
        update();
        render();
        requestAnimationFrame(loop);
    }

    // Update game state
    function update() {
        player.update();
        enemies.forEach(enemy => enemy.update());
        bullets.forEach(bullet => bullet.update());
        particles.forEach(particle => particle.update());
        physics.checkCollisions();
        bullets.splice(0, bullets.filter(bullet => !bullet.offScreen).length);
        particles.splice(0, particles.filter(particle => particle.life > 0).length);
    }

    // Render the game
    function render() {
        applyMotionBlur(ctx, canvas); // Add motion blur effect
        player.render(ctx);
        enemies.forEach(enemy => enemy.render(ctx));
        bullets.forEach(bullet => bullet.render(ctx));
        particles.forEach(particle => particle.render(ctx));
        ui.render(ctx);
    }

    // Handle player shooting
    document.addEventListener("click", () => {
        player.shoot(bullets, particles);
    });

    start(); // Start the game
});
