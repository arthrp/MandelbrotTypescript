const canv = document.querySelector("#main-canvas");
const panX = 1.5;
const panY = 1;
drawFractal(panX, panY, (<any>document.querySelector("#magn-factor")).value);

document.querySelector("#magn-factor").addEventListener("input", (e) => {
    console.log(e);
    const magnFactor = (<any>(e.srcElement)).value;
    document.querySelector("#magn-factor-value").innerHTML = magnFactor;

    drawFractal(panX, panY, magnFactor);
});

function drawFractal(panX: number, panY: number, magnFactor: number) {
    new MandlebrotManager(canv, magnFactor).draw(panX, panY);
}