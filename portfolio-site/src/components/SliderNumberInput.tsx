import { MutableRefObject, ReactNode, useRef, useState } from "react";

interface Props {
    min: number;
    max: number;
    resetValue: number;
    onValueChanged: (value: Number) => void;
    children: ReactNode;
}

export default function SliderNumberInput({onValueChanged, min, max, resetValue, children}: Props) {
    const inputTextRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const [value, setValue] = useState(0);

    const _onValueChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setValue(Number(e.target.value));
        onValueChanged(Number(e.target.value));
    }

    const onReset = () => {
        setValue(resetValue);
        onValueChanged(resetValue);
    }

    return (<>
        <div style={value==resetValue ? {color: ""} : {color:"#00f", fontWeight:"bold"}}>
            {children}{value==resetValue ? "" : "*"}
        </div>
        <div style={{display: "flex"}}>
            <input style={{width:48}} ref={inputTextRef} onChange={_onValueChanged} type="number" min={min} max={max} value={value}/>
            <input onChange={_onValueChanged} type="range" min={min} max={max} value={value}/>
        </div>
        <button onClick={onReset}>Reset</button>
        <br/>
    </>);
}