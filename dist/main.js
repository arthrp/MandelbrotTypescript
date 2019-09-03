const canv = document.querySelector("#main-canvas");
const magnFactor = document.querySelector("#magn-factor").value;
let initialPanX = document.querySelector("#pan-x").value;
const displayManager = new DisplayManager(canv, initialPanX, 1, magnFactor);
displayManager.drawFractal();
// drawFractal(panX, panY, (<any>document.querySelector("#magn-factor")).value);
document.querySelector("#magn-factor").addEventListener("input", (e) => {
    displayManager.handleMagnFactorChange(e);
});
document.querySelector("#pan-x").addEventListener("input", (e) => {
    displayManager.handlePanXChange(e);
});
//# sourceMappingURL=main.js.map