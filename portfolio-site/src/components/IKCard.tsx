import { ReactNode } from "react"
import "./style/IKCard.css"

interface Props {
    title: string,
    desc: ReactNode,
    video: string,
    flip: boolean
}

export default function IKCard({title, desc, video, flip} : Props){
    return (
        <div className="ikcard">
            <h3>{title}</h3>
            <div>
                <div style={{float: flip ? "left" : "right"}}>{(desc)}</div>
                <video src={video} style={{width: 100, height: 100, float: flip ? "right" : "left"}}></video>
            </div>
        </div>
    )
}