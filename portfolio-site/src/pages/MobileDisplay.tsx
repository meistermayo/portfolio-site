import { MutableRefObject, useRef, useEffect, useState } from "react";
import DeviceSelect from "../components/DeviceSelect";
import { DeviceData } from "../types/DeviceData";
import SliderNumberInput from "../components/SliderNumberInput";
import MobileCanvas from "../components/MobileCanvas";
import "./style/MobileDisplay.css"

export default function MobileDisplay() {
    const [ppi, setPPI] = useState(93);
    const [useCustom, setUseCustom] = useState(false);
    const [devices, setDevices] = useState<Array<DeviceData>>([]);
    const [displayDevices, setDisplayDevices] = useState<Array<DeviceData>>([]);
    const [filterOS, setFilterOS] = useState<string>("both");
    const [filterDeviceType, setFilterDeviceType] = useState<string>("both");
    const [hasFetched, setFetched] = useState(false);
    const [isFlipped, setFlipped] = useState<boolean>(false);
    const [currentDevice, setCurrentDevice] = useState<DeviceData>();
    const [zoom, setZoom] = useState(100);
    const [textSize, setTextSize] = useState(12);

    const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);

    function onDeviceSelected(e: React.ChangeEvent<HTMLSelectElement>) {
        setUseCustom(false);

        const device = devices.find((d) => 
            d.id == Number(e.target.value)
        );

        if (device != null)
        {
            setCurrentDevice({...device});
        }
        console.log((device == null) ? "null" : device.name);
    }

    function filterDevices(inFilterOS: string, inFilterDeviceType: string)
    {
        return setDisplayDevices(
            devices.filter(
                (d) => {console.log(`${filterOS} ${filterDeviceType} ${d.os.toLowerCase()} ${d.type.toLowerCase()}`)
                    return (inFilterOS == "both" || d.os.toLowerCase() == inFilterOS) && 
                    (inFilterDeviceType == "both" || d.type.toLowerCase() == inFilterDeviceType);}
            )
        );
    }

    function onDeviceFilter(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilterDeviceType(e.target.value);
        filterDevices(filterOS, e.target.value);
    }

    function onOSFilter(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilterOS(e.target.value);
        filterDevices(e.target.value, filterDeviceType);
    }
    
    useEffect(() => {
        if (!hasFetched)
        {
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

                const devices = phones.concat(tablets);

                // enforce portrait v landscape
                devices.forEach((d) => {
                    if (d.width < d.height)
                    {
                        const tmp = d.width;
                        d.width = d.height;
                        d.height = tmp;
                    }
                });

                setDevices(phones.concat(tablets));
                filterDevices(filterOS, filterDeviceType);

                setCurrentDevice(devices[0]);
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
            <div className="panel">
            <button onClick={() => {setFetched(false);}}>Fetch Device Data</button>
            <button onClick={() => {setFlipped(!isFlipped);}}>{isFlipped ? "Portrait" : "Landscape"}</button>
                {
                    currentDevice != null && (
                        <>
                                <div>Use Custom: <input type={"checkbox"} checked={useCustom} onChange={(e) => {setUseCustom(e.target.checked);}}/></div>
                                <div>Name: <input type="text" disabled={true} value={currentDevice.name} /></div>
                                <div>Width: <input type="text" disabled={!useCustom} value={currentDevice.width} onChange={(e) => setCurrentDevice({...currentDevice, width: Number(e.target.value)})}/> px</div>
                                <div>Height: <input type="text" disabled={!useCustom} value={currentDevice.height} onChange={(e) => setCurrentDevice({...currentDevice, height: Number(e.target.value)})}/> px</div>
                                <div>PPI: <br/><input type="text" disabled={!useCustom} value={currentDevice.ppi} onChange={(e) => setCurrentDevice({...currentDevice, ppi: Number(e.target.value)})}/></div>
                                <div>Aspect Ratio: <input type="text" disabled={true} value={Math.round(currentDevice.width/currentDevice.height * 100) / 100} /></div>
                        </>
                    )
                }
                <br/>
                <SliderNumberInput min={10} max={4000} resetValue={93} onValueChanged={(v) => setPPI(v.valueOf())}>Screen PPI</SliderNumberInput>
            
            <SliderNumberInput min={25} max={200} resetValue={100} onValueChanged={(v) => setZoom(v.valueOf())}>
                Zoom: {zoom}%
            </SliderNumberInput>
            <SliderNumberInput min={10} max={96} resetValue={12} onValueChanged={(v) => setTextSize(v.valueOf())}>
                Text-Size: {textSize}px
            </SliderNumberInput>

            <br/>
            <DeviceSelect devices={displayDevices} onSelect={onDeviceSelected}/>
            <br/>
            <div style={{display: "flex"}}>
                <select value={filterDeviceType} onChange={onDeviceFilter}>
                    <option value="phone">Phone</option>
                    <option value="tablet">Tablet</option>
                    <option value="both">Both</option>
                </select>
                <br/>
                <select value={filterOS} onChange={onOSFilter}>
                    <option value="ios">iOS</option>
                    <option value="android">Android</option>
                    <option value="both">Both</option>
                </select>
            </div>
            </div>
        </div>
    </div>

    </>);
}