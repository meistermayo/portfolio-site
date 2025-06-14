import { MutableRefObject, ReactEventHandler, useEffect, useState } from "react";
import { DeviceData } from "../types/DeviceData";

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
}

export default function MobileCanvas({canvasRef, isFlipped, currentDevice, zoom} : Props) {
    
    const [viewPos, setViewPos] = useState<vec2>({x: 0, y: 0});
    const [mouseClickPos, setMouseClickPos] = useState<vec2>({x: 0, y: 0});
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

    const handleMouseDown = (e : React.MouseEvent<HTMLCanvasElement>) => {
        setMouseClickPos({x: e.nativeEvent.offsetX, y:e. nativeEvent.offsetY});
        setIsMouseDown(true);
    }

    const handleMouseMove = (e : React.MouseEvent<HTMLCanvasElement>) => {
        if (isMouseDown)
        {
            const deltaX = e.nativeEvent.offsetX - mouseClickPos.x;
            const deltaY = e.nativeEvent.offsetY - mouseClickPos.y;
            setViewPos({x: viewPos.x + deltaX, y: viewPos.y + deltaY});

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
            const ctx = canvasRef.current.getContext("2d");
            if (currentDevice != null && ctx != null)
            {
                const sliderScale = zoom * 0.01;
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.fillStyle = "#f06";

                const width = isFlipped ? currentDevice.height : currentDevice.width;
                const height = isFlipped ? currentDevice.width : currentDevice.height;
                ctx.fillRect(viewPos.x, viewPos.y, width*sliderScale, height*sliderScale);
            }
        }
    }, [viewPos, zoom, currentDevice, isFlipped]);

    return (<>
        <canvas
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onWheel={() =>{}}
            style={{"backgroundColor": "#eef"}}
            ref={canvasRef}
            width={900}
            height={400}
        />
    </>);
}