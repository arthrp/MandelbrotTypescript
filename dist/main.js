const canv = document.querySelector("#main-canvas");
const panX = 1.5;
const panY = 1;
drawFractal(panX, panY, document.querySelector("#magn-factor").value);
document.querySelector("#magn-factor").addEventListener("input", (e) => {
    console.log(e);
    const magnFactor = (e.srcElement).value;
    document.querySelector("#magn-factor-value").innerHTML = magnFactor;
    drawFractal(panX, panY, magnFactor);
});
function drawFractal(panX, panY, magnFactor) {
    new MandlebrotManager(canv, magnFactor).draw(panX, panY);
}
//# sourceMappingURL=main.js.map