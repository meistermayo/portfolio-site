import { useContext } from "react";
import "./style/ArtImage.css"
import { ArtContext } from "../pages/Art"
import useIsMobile from "../hooks/useIsMobile";

interface Props {
    src: string
}

export default function ArtImage({src}: Props) {
    const isMobile = useIsMobile();
    const artContext = useContext(ArtContext);

    return (
        <div className={isMobile ? "imageWrapperMobile" : "imageWrapper"}>
            <img className="image" src={src} onClick={() => artContext.onClick(src)}/>
        </div>
    )
}