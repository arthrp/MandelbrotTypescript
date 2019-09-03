class DisplayManager {
    constructor(_canv, _panX, _panY, _magnFactor) {
        this._canv = _canv;
        this._panX = _panX;
        this._panY = _panY;
        this._magnFactor = _magnFactor;
    }
    handleMagnFactorChange(e) {
        this._magnFactor = (e.srcElement).value;
        document.querySelector("#magn-factor-value").innerHTML = this._magnFactor.toString();
        this.drawFractal();
    }
    handlePanXChange(e) {
        this._panX = (e.srcElement).value;
        document.querySelector("#pan-x-value").innerHTML = this._panX.toString();
        this.drawFractal();
    }
    drawFractal() {
        this.drawFractalInner(this._panX, this._panY, this._magnFactor);
    }
    drawFractalInner(panX, panY, magnFactor) {
        new MandlebrotManager(this._canv, magnFactor).drawGreyscalePixels(panX, panY);
    }
}
//# sourceMappingURL=displayManager.js.map