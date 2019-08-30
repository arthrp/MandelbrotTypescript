class MandlebrotManager {
    private readonly _ctx;
    private readonly _magnificationFactor = 200;
    
    constructor(private readonly _canvas: any) {
        this._ctx = _canvas.getContext("2d");
    }

    public draw(panX: number, panY: number) : void {
        const ctx = this._ctx;

        for(let x = 0; x < this._canvas.width; x++){
            for(let y = 0; y < this._canvas.height; y++){
                let mandelbrotCoefficient = this.getMandelbrotCoefficient(x/this._magnificationFactor - panX, y/this._magnificationFactor - panY, 100);

                if(mandelbrotCoefficient === 0){
                    ctx.fillStyle = "#000";
                }
                else{
                    ctx.fillStyle = `hsl(54, 100%, ${mandelbrotCoefficient}%)`
                }

                ctx.fillRect(x,y,1,1);
            }
        }
    }

    public drawGreyscale(panX: number, panY: number): void {
        const ctx = this._ctx;

        for(let x = 0; x < this._canvas.width; x++){
            for(let y = 0; y < this._canvas.height; y++){
                let mandelbrotCoefficient = this.getMandelbrotCoefficient(x/this._magnificationFactor - panX, y/this._magnificationFactor - panY, 255);

                if(mandelbrotCoefficient === 0){
                    ctx.fillStyle = "#000";
                }
                else{
                    ctx.fillStyle = `rgb(${mandelbrotCoefficient}, ${mandelbrotCoefficient}, ${mandelbrotCoefficient})`;
                }

                ctx.fillRect(x,y,1,1);
            }
        }
    }

    private getMandelbrotCoefficient(x: number, y:number, maxOutput: number): number {
        let resultReal = x;
        let resultImaginary = y;
        const maxIters = 200;

        for(let i = 0; i < maxIters; i++){
            let tmpReal = resultReal * resultReal - resultImaginary * resultImaginary + x;

            let tmpImaginary = 2 * resultReal * resultImaginary + y;

            resultReal = tmpReal;
            resultImaginary = tmpImaginary;

            if(resultReal * resultImaginary > 5)
                return (i / maxIters) * maxOutput;
        }

        return 0;
    }
}