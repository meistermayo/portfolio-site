import { useContext } from "react";
import "./style/ArtImage.css"
import { ArtContext } from "../pages/Art"

interface Props {
    src: string
}

export default function ArtImage({src}: Props) {
    const artContext = useContext(ArtContext);

    return (
        <div className="imageWrapper">
            <img className="image" src={src} onClick={artContext.onClick}/>
        </div>
    )
}