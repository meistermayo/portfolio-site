import { MutableRefObject, useRef, useEffect, useState } from "react";

interface DeviceData {
    created_at: string;
    id: number;
    name: string;
    os: string;
    type: string;
    ppi: number;
    height: number;
    width: number;
}

export default function MobileDisplay() {
    const [devices, setDevices] = useState([]);
    const [sliderValue, setSliderValue] = useState(100);
    const [hasFetched, setFetched] = useState(false);

    const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);

    useEffect(() => {
        if (!hasFetched)
        {
            setFetched(true);
            async function getTablets() {
                const response = await fetch("https://web-scraper-py.onrender.com/tablets");
                const json = await response.json();

                setDevices(json.tablets);
            }

            getTablets();
        }
    }, [hasFetched]);

    useEffect(() => {
        if (canvasRef.current != null)
        {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx != null)
            {
                const sliderScale = sliderValue * 0.01;
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.fillStyle = "#f06";
                ctx.fillRect(200,40, 200*sliderScale, 100*sliderScale);
            }
        }
    }, [sliderValue]);

    return (<>
        <canvas onWheel={() =>{}} style={{"backgroundColor": "#eef"}} ref={canvasRef} width={500} height={400}/>
        <button onClick={() => {setFetched(false);}}>Mark dirty</button>
        <input type="range" min="0" max="100" defaultValue="50" onChange={(e) => {setSliderValue(Number(e.target.value));}}/>
        <select>
            {devices.length == 0 ? (
                <option key={-1} value={-1}>None</option>
            ) : (
                devices.map(
                    (d: DeviceData) => (
                        <option key={d.id} value={d.id}>
                            {d.name}
                        </option>
                    )
                )
            )}
        </select>
        <select>
            <option>iPhone</option>
            <option>iPad</option>
        </select>
        <select>
            <option>Phone</option>
            <option>Tablet</option>
            <option>Both</option>
        </select>
        <select>
            <option>iOS</option>
            <option>Android</option>
            <option>Both</option>
        </select>
    </>);
}