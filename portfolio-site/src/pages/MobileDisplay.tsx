import { MutableRefObject, useRef, useEffect, useState } from "react";
import DeviceSelect from "../components/DeviceSelect";
import { DeviceData } from "../types/DeviceData";
import SliderNumberInput from "../components/SliderNumberInput";
import MobileCanvas from "../components/MobileCanvas";
import "./style/MobileDisplay.css"

export default function MobileDisplay() {
    const [ppi, setPPI] = useState(93);
    const [devices, setDevices] = useState<Array<DeviceData>>([]);
    const [hasFetched, setFetched] = useState(false);
    const [isFlipped, setFlipped] = useState<boolean>(false);
    const [currentDevice, setCurrentDevice] = useState<DeviceData>();
    const [zoom, setZoom] = useState(100);
    const [textSize, setTextSize] = useState(12);

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
            async function getTablets(): Promise<DeviceData[]> {
                const response = await fetch("https://web-scraper-py.onrender.com/tablets");
                const json = await response.json();

                return json.tablets;
            }

            async function getPhones(): Promise<DeviceData[]> {
                const response = await fetch("https://web-scraper-py.onrender.com/phones");
                const json = await response.json();

                return json.phones;
            }

            async function fetchAll(): Promise<void> {
                const phones = await getPhones();
                const tablets = await getTablets();

                setDevices(phones.concat(tablets));
            }

            fetchAll();
        }
        else
        {
            console.log("can't fetch!");
        }
    }, [hasFetched]);

    return (<>
    <div className="relativeContainer">
        <MobileCanvas canvasRef={canvasRef} isFlipped={isFlipped} currentDevice={currentDevice} zoom={zoom} screenPPI={ppi} textSize={textSize}/>
        <div className="z1">
            <button onClick={() => {setFetched(false);}}>Mark dirty</button>
            <button onClick={() => {setFlipped(!isFlipped);}}>{isFlipped ? "Portrait" : "Landscape"}</button>
            <div className="panel">
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
                <SliderNumberInput min={10} max={4000} resetValue={93} onValueChanged={(v) => setPPI(v.valueOf())}>Screen PPI</SliderNumberInput>
            </div>
            
            <SliderNumberInput min={25} max={200} resetValue={100} onValueChanged={(v) => setZoom(v.valueOf())}>
                Zoom: {zoom}%
            </SliderNumberInput>
            <SliderNumberInput min={10} max={96} resetValue={12} onValueChanged={(v) => setTextSize(v.valueOf())}>
                Text-Size: {textSize}px
            </SliderNumberInput>

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