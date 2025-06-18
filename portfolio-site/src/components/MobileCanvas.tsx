import { MutableRefObject, useEffect, useState } from "react";
import { DeviceData } from "../types/DeviceData";
import "./style/MobileCanvas.css"

interface vec2 {
    x: number;
    y: number;
}

interface Props
{
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
    isFlipped: boolean;
    currentDevice: DeviceData | undefined;
    zoom: number;
    screenPPI: number;
    textSize: number;
}

export default function MobileCanvas({canvasRef, isFlipped, currentDevice, zoom, screenPPI, textSize} : Props) {
    
    const [viewPos, setViewPos] = useState<vec2>({x: 400, y: 200});
    const [mouseClickPos, setMouseClickPos] = useState<vec2>({x: 0, y: 0});
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

    const handleMouseDown = (e : React.MouseEvent<HTMLCanvasElement>) => {
        setMouseClickPos({x: e.nativeEvent.offsetX, y:e. nativeEvent.offsetY});
        setIsMouseDown(true);
    }

    function clamp(value: number, min: number, max: number)
    {
        return Math.max(min, Math.min(max, value));
    }

    const handleMouseMove = (e : React.MouseEvent<HTMLCanvasElement>) => {
        if (isMouseDown)
        {
            const deltaX = e.nativeEvent.offsetX - mouseClickPos.x;
            const deltaY = e.nativeEvent.offsetY - mouseClickPos.y;

            const width = (canvasRef.current?.width || 0);
            const height = (canvasRef.current?.height || 0);

            const clampX = clamp(viewPos.x + deltaX, -width * 0.1, width * 1.1);
            const clampY = clamp(viewPos.y + deltaY, -height * 0.1, height * 1.1);

            setViewPos({x: clampX, y: clampY});
            setMouseClickPos({x: e.nativeEvent.offsetX, y:e. nativeEvent.offsetY});
        }
    }
    
    const handleMouseUp = (e : React.MouseEvent<HTMLCanvasElement>) => {
        setIsMouseDown(false);
    }
    
    const handleMouseLeave = (e : React.MouseEvent<HTMLCanvasElement>) => {
        setIsMouseDown(false);
    }

    useEffect(() => {
        if (canvasRef.current != null)
        {
            canvasRef.current.width = canvasRef.current.getBoundingClientRect().width;
            canvasRef.current.height = canvasRef.current.getBoundingClientRect().height;

            const ctx = canvasRef.current.getContext("2d");
            if (ctx != null)
            {
                if (screenPPI != 0)
                {
                    const zoomPercent = zoom * 0.01;

                    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

                    const cell_size = Math.max(screenPPI * zoomPercent, 1.0);
                    
                    // lines ====================================================================
                    const maxInch = 11.0;
                    for (let x=viewPos.x % cell_size; x<canvasRef.current.width; x += cell_size)
                    {
                        const inch = Math.round((x - viewPos.x)/cell_size);

                        ctx.strokeStyle = `rgba(170, 170, 225, ${1.0 - Math.abs(inch/maxInch)*1.0})`;
                        ctx.beginPath();
                        ctx.moveTo(x, -cell_size);
                        ctx.lineTo(x, canvasRef.current.height + cell_size);
                        ctx.stroke();
                        
                    }
                    for (let y=viewPos.y % cell_size; y<canvasRef.current.height; y += cell_size)
                    {
                        const inch = Math.round((y - viewPos.y)/cell_size);
                        ctx.strokeStyle = `rgba(170, 170, 225, ${1.0 - Math.abs(inch/maxInch)})`;
                        ctx.beginPath();
                        ctx.moveTo(-cell_size, y);
                        ctx.lineTo(canvasRef.current.width + cell_size, y);
                        ctx.stroke();
                    }

                    // gradient fadeout ===========================================================================
                    const gradient = ctx.createRadialGradient(viewPos.x, viewPos.y, 0, viewPos.x, viewPos.y, 1200);

                    gradient.addColorStop(0, 'rgba(226, 231, 236, 0)');
                    gradient.addColorStop(0.7, 'rgba(226, 231, 236, 0)');
                    gradient.addColorStop(1, 'rgb(226, 231, 236)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0,  canvasRef.current.width,  canvasRef.current.height);

                    // inch markers ==========================================================================
                    for (let x=viewPos.x % cell_size; x<canvasRef.current.width; x += cell_size)
                    {
                        const inch = Math.round((x - viewPos.x)/cell_size);
                        ctx.font = `16px serif`;
                        ctx.textBaseline = "bottom";
                        ctx.fillStyle = "#aaf";
                        ctx.fillText(`${inch}.0"`, x + 4, canvasRef.current.height);
                    }
                    
                    // device ====================================================================================
                    if (currentDevice != null)
                    {
                        ctx.fillStyle = isMouseDown ? "#f39" : "#f06";

                        const width = isFlipped ? currentDevice.height : currentDevice.width;
                        const height = isFlipped ? currentDevice.width : currentDevice.height;

                        const ppiScale = 1.0 / currentDevice.ppi * (screenPPI);

                        ctx.fillRect(viewPos.x, viewPos.y, width*ppiScale*zoomPercent, height*ppiScale*zoomPercent);

                        ctx.font = `${textSize*ppiScale*zoomPercent}px serif`;
                        ctx.textBaseline = "top";
                        ctx.fillStyle = "#004";
                        ctx.fillText("AaBbCcDdEe01234 /.,* (12 Pixel Font)", viewPos.x, viewPos.y);
                    }
                }
            }
        }
    }, [viewPos, zoom, currentDevice, isFlipped, isMouseDown, screenPPI, textSize]);

    return (
        <canvas className="mobileCanvas"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onWheel={() =>{}}
            style={{"backgroundColor": "#eef"}}
            ref={canvasRef}
        />
    );
}