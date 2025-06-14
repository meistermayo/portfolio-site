import { MutableRefObject, ReactNode, useRef, useState } from "react";

interface Props {
    onValueChanged: (value: Number) => void;
    children: ReactNode;
}

export default function SliderNumberInput({onValueChanged, children}: Props) {
    const inputTextRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const [value, setValue] = useState(0);

    const _onValueChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setValue(Number(e.target.value));
        if (inputTextRef.current != null)
        {
            inputTextRef.current.value = String(value);
        }
        onValueChanged(Number(e.target.value));
    }

    return (<>
        <br/>
        {children}<br/>
        <input ref={inputTextRef} type="number"/>
        <input onChange={_onValueChanged} type="range"/>
        <br/>
    </>);
}