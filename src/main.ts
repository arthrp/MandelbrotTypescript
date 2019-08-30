const canv = document.querySelector("#main-canvas");
const mandelbrotManager = new MandlebrotManager(canv);
mandelbrotManager.draw(1.5, 1);