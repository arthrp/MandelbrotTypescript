class MandlebrotManager {
    private readonly _ctx;
    
    constructor(private readonly _canvas: any, private readonly _magnificationFactor) {
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

    public drawGreyscalePixels(panX: number, panY: number): void {
        const ctx = this._ctx;
        const canvWidth = this._canvas.width;
        let imageData = ctx.getImageData(0,0,canvWidth,this._canvas.height);

        for(let x = 0; x < this._canvas.width; x++){
            for(let y = 0; y < this._canvas.height; y++){
                let mandelbrotCoefficient = this.getMandelbrotCoefficient(x/this._magnificationFactor - panX, y/this._magnificationFactor - panY, 255);
                let indices = this.getPixelColorIndices(x,y,canvWidth);

                imageData.data[indices[0]] =
                 imageData.data[indices[1]] = 
                 imageData.data[indices[2]] =
                 mandelbrotCoefficient;

                imageData.data[indices[3]] = 255;
            }
        }

        ctx.putImageData(imageData,0,0);
    }

    public drawColoredPixels(panX: number, panY: number): void {
        const ctx = this._ctx;
        const canvWidth = this._canvas.width;
        let imageData = ctx.getImageData(0,0,canvWidth,this._canvas.height);

        for(let x = 0; x < this._canvas.width; x++){
            for(let y = 0; y < this._canvas.height; y++){
                let greenColor = this.getMandelbrotCoefficient(x/this._magnificationFactor - panX, y/this._magnificationFactor - panY, 255);
                let redColor = this.getMandelbrotCoefficient(x/this._magnificationFactor - panX, y/this._magnificationFactor - panY, 230);
                let indices = this.getPixelColorIndices(x,y,canvWidth);

                imageData.data[indices[0]] = redColor;
                imageData.data[indices[1]] = greenColor;
                imageData.data[indices[2]] = 0;
                 

                imageData.data[indices[3]] = 255;
            }
        }

        ctx.putImageData(imageData,0,0);
    }

    private getPixelColorIndices(x: number, y: number, width: number): any[] {
        var red = y * (width * 4) + x * 4;
        return [red, red + 1, red + 2, red + 3];
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