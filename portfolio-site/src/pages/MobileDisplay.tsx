import { MutableRefObject, useRef, useEffect, useState } from "react";
import DeviceSelect from "../components/DeviceSelect";
import { DeviceData } from "../types/DeviceData";
import SliderNumberInput from "../components/SliderNumberInput";
import MobileCanvas from "../components/MobileCanvas";
import "./style/MobileDisplay.css"

export default function MobileDisplay() {
    const [devices, setDevices] = useState<Array<DeviceData>>([]);
    const [hasFetched, setFetched] = useState(false);
    const [isFlipped, setFlipped] = useState<boolean>(false);
    const [currentDevice, setCurrentDevice] = useState<DeviceData>();
    const [sliderValue, setSliderValue] = useState(100);

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
            console.log("fetched!");
            setFetched(true);
            async function getTablets() {
                const response = await fetch("https://web-scraper-py.onrender.com/tablets");
                const json = await response.json();

                setDevices(json.tablets);
            }

            getTablets();
        }
        else
        {
            console.log("can't fetch!");
        }
    }, [hasFetched]);

    return (<>
    <div className="relativeContainer">
        <MobileCanvas canvasRef={canvasRef} isFlipped={isFlipped} currentDevice={currentDevice} zoom={sliderValue}/>
        <div className="z1">
            <button onClick={() => {setFetched(false);}}>Mark dirty</button>
            <button onClick={() => {setFlipped(!isFlipped);}}>{isFlipped ? "Portrait" : "Landscape"}</button>
            <div className="darkText panel">
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
                <SliderNumberInput>Screen PPI</SliderNumberInput>
                <SliderNumberInput>Zoom</SliderNumberInput>
            </div>
            <input type="range" min="25" max="200" defaultValue="100" onChange={(e) => {setSliderValue(Number(e.target.value));}}/>
            <button onClick={() => {setSliderValue(100)}}>Reset Zoom</button>
            <div className="darkText">Zoom: {sliderValue}%</div>
            <br/>
            <DeviceSelect devices={devices} onSelect={onDeviceSelected}/>
            <br/>
            <select>
                <option>iPhone</option>
                <option>iPad</option>
            </select>
            <br/>
            <select >
                <option>Phone</option>
                <option>Tablet</option>
                <option>Both</option>
            </select>
            <br/>
            <select >
                <option>iOS</option>
                <option>Android</option>
                <option>Both</option>
            </select>
        </div>
    </div>

    </>);
}