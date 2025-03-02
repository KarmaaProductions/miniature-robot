// highResCanvas.js - Sets up a high-resolution canvas
export function setupCanvas(canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    document.body.appendChild(canvas);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    });

    return ctx;
}
