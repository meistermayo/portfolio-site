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
            <div className="imgWrapper">
                <img src={img}></img>
            </div>
            <div className="workHeader">
                <h3 style={{zIndex: 1}}>{title}</h3>
            </div>
            <Line/>
            <p style={{zIndex: 1}}>{children}</p>
            <div style={{zIndex: 1}}className="buttonDiv">
                <a className="workLinkA" href={link}><button className="workLink">More Info</button></a>
            </div>
        </div>
    )
}