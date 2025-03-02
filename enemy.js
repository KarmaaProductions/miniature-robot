// enemy.js - Handles enemy movement and behavior
import { applyEnemyGradient } from "./enemyGradient.js";

export class Enemy {
    constructor(game) {
        this.game = game;
        this.x = Math.random() * game.canvas.width;
        this.y = Math.random() * game.canvas.height / 2; // Spawn in upper half
        this.width = 20;
        this.height = 20;
        this.speed = 2;
        this.direction = Math.random() < 0.5 ? 1 : -1; // Move left or right randomly
    }

    update() {
        this.x += this.speed * this.direction;
        if (this.x <= 0 || this.x + this.width >= this.game.canvas.width) {
            this.direction *= -1; // Bounce off walls
        }
        this.y += Math.sin(this.x / 50) * 2; // Wave-like movement
    }

    render(ctx) {
        applyEnemyGradient(ctx, this.x, this.y, this.width, this.height);
    }
}
