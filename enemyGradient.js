// enemyGradient.js - Adds a gradient effect for enemies
export function applyEnemyGradient(ctx, x, y, width, height) {
    const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
    gradient.addColorStop(0, "green");
    gradient.addColorStop(1, "lime");
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);
}
