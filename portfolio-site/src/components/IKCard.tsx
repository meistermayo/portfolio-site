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
            <div className="ikContainer">
                <div className={flip ? "leftText" : "rightText"}>
                    <div className={"text"} >{(desc)}</div>
                </div>
                <div className={flip ? "rightText" : "leftText"}>
                    <video className={"vid"} src={video}></video>
                </div>
            </div>
        </div>
    )
}