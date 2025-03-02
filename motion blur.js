// motionBlur.js - Adds motion blur effect
export function applyMotionBlur(ctx, canvas) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
