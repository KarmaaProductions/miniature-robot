// player.js - Handles player movement and shooting
import { Bullet } from "./bullet.js";
import { Particle } from "./particle.js";
import { applyPlayerGradient } from "./playerGradient.js";

export class Player {
    constructor({ canvas }) {
        this.canvas = canvas;
        this.x = canvas.width / 2 - 10; // Center horizontally
        this.y = canvas.height - 50; // Near the bottom
        this.speed = 5;
    }

    update() {
        // Movement logic (you can enhance this for keyboard controls)
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft" && this.x > 0) {
                this.x -= this.speed;
            } else if (event.key === "ArrowRight" && this.x < this.canvas.width - 20) {
                this.x += this.speed;
            }
        });
    }

    render(ctx) {
        applyPlayerGradient(ctx, this.x, this.y);
    }

    shoot(bullets, particles) {
        bullets.push(new Bullet(this.x + 10, this.y));
        for (let i = 0; i < 10; i++) {
            particles.push(new Particle(this.x + 10, this.y));
        }
    }
}
