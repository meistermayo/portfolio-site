import { ReactNode } from "react";
import Line from "./Line";
import "./style/WorkCard.css"

interface Props {
    img: string;
    title: string;
    link: string;
    children: ReactNode;
}

export default function WorkCard({img, link, title, children}: Props) {
    return (
        <div className="background">
            <h3>{title}</h3>
            <Line/>
            <p>{children}</p>
            <div className="buttonDiv">
                <a className="workLinkA" href={link}><button className="workLink">More Info</button></a>
            </div>
        </div>
    )
}