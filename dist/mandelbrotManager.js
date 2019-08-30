class MandlebrotManager {
    constructor(_canvas, _magnificationFactor) {
        this._canvas = _canvas;
        this._magnificationFactor = _magnificationFactor;
        this._ctx = _canvas.getContext("2d");
    }
    draw(panX, panY) {
        const ctx = this._ctx;
        for (let x = 0; x < this._canvas.width; x++) {
            for (let y = 0; y < this._canvas.height; y++) {
                let mandelbrotCoefficient = this.getMandelbrotCoefficient(x / this._magnificationFactor - panX, y / this._magnificationFactor - panY, 100);
                if (mandelbrotCoefficient === 0) {
                    ctx.fillStyle = "#000";
                }
                else {
                    ctx.fillStyle = `hsl(54, 100%, ${mandelbrotCoefficient}%)`;
                }
                ctx.fillRect(x, y, 1, 1);
            }
        }
    }
    drawGreyscale(panX, panY) {
        const ctx = this._ctx;
        for (let x = 0; x < this._canvas.width; x++) {
            for (let y = 0; y < this._canvas.height; y++) {
                let mandelbrotCoefficient = this.getMandelbrotCoefficient(x / this._magnificationFactor - panX, y / this._magnificationFactor - panY, 255);
                if (mandelbrotCoefficient === 0) {
                    ctx.fillStyle = "#000";
                }
                else {
                    ctx.fillStyle = `rgb(${mandelbrotCoefficient}, ${mandelbrotCoefficient}, ${mandelbrotCoefficient})`;
                }
                ctx.fillRect(x, y, 1, 1);
            }
        }
    }
    getMandelbrotCoefficient(x, y, maxOutput) {
        let resultReal = x;
        let resultImaginary = y;
        const maxIters = 200;
        for (let i = 0; i < maxIters; i++) {
            let tmpReal = resultReal * resultReal - resultImaginary * resultImaginary + x;
            let tmpImaginary = 2 * resultReal * resultImaginary + y;
            resultReal = tmpReal;
            resultImaginary = tmpImaginary;
            if (resultReal * resultImaginary > 5)
                return (i / maxIters) * maxOutput;
        }
        return 0;
    }
}
//# sourceMappingURL=mandelbrotManager.js.map