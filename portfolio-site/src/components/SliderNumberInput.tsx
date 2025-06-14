import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function SliderNumberInput({children}: Props) {
    return (<>
        <br/>
        {children}<br/>
        <input type="number"/>
        <input type="range"/>
        <br/>
    </>);
}