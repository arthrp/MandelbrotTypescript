class DisplayManager {
    constructor(private readonly _canv: any, private _panX: number, private _panY: number, private _magnFactor: number) {}

    public handleMagnFactorChange(e: Event): void {
        this._magnFactor = (<any>(e.srcElement)).value;
        document.querySelector("#magn-factor-value").innerHTML = this._magnFactor.toString();
    
        this.drawFractal();
    }

    public handlePanXChange(e: Event): void {
        this._panX = (<any>(e.srcElement)).value;
        document.querySelector("#pan-x-value").innerHTML = this._panX.toString();

        this.drawFractal();
    }

    public drawFractal(): void {
        this.drawFractalInner(this._panX, this._panY, this._magnFactor);
    }

    private drawFractalInner(panX: number, panY: number, magnFactor: number): void {
        new MandlebrotManager(this._canv, magnFactor).drawGreyscalePixels(panX, panY);
    }
}