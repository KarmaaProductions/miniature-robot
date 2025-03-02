// playerGradient.js - Adds a gradient effect for the player
export function applyPlayerGradient(ctx, x, y) {
    const gradient = ctx.createLinearGradient(x, y, x + 20, y + 20);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "lightblue");
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, 20, 20);
}
