import { MutableRefObject, useRef, useEffect, useState } from "react";
import DeviceSelect from "../components/DeviceSelect";
import { DeviceData } from "../types/DeviceData";

export default function MobileDisplay() {
    const [currentDevice, setCurrentDevice] = useState<DeviceData>();
    const [devices, setDevices] = useState<Array<DeviceData>>([]);
    const [sliderValue, setSliderValue] = useState(100);
    const [hasFetched, setFetched] = useState(false);

    const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);

    function onDeviceSelected(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value);
        const device = devices.find((d) => 
            d.id == Number(e.target.value)
        );

        if (device != null)
        {
            setCurrentDevice(device);
        }
        console.log((device == null) ? "null" : device.name);
    }

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
            if (currentDevice != null && ctx != null)
            {
                const sliderScale = sliderValue * 0.01;
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.fillStyle = "#f06";
                ctx.fillRect(200,40, currentDevice.width*sliderScale, currentDevice.height*sliderScale);
            }
        }
    }, [sliderValue, currentDevice]);

    return (<>
        <canvas onWheel={() =>{}} style={{"backgroundColor": "#eef"}} ref={canvasRef} width={900} height={400}/>
        <button onClick={() => {setFetched(false);}}>Mark dirty</button>
        {
            currentDevice != null && (
                <ul>
                    <li>{currentDevice.name}</li>
                    <li>{currentDevice.width} px</li>
                    <li>{currentDevice.height} px</li>
                    <li>{Math.round(currentDevice.width/currentDevice.height * 100) / 100}</li>
                    <li>{currentDevice.ppi} ppi</li>
                </ul>
            )
        }
        <input type="range" min="25" max="100" defaultValue="100" onChange={(e) => {setSliderValue(Number(e.target.value));}}/>
        <DeviceSelect devices={devices} onSelect={onDeviceSelected}/>
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