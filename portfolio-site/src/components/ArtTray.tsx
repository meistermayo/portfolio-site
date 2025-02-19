import useIsMobile from "../hooks/useIsMobile"
import ArtImage from "./ArtImage"
import "./style/ArtTray.css"

interface Props {
    title: string,
    images: Array<string>
}

export default function ArtTray({title, images}: Props) {
    const isMobile = useIsMobile();
    
    return (
        <div className="trayWrapper">
            <h2>{title}</h2>
            <div className={isMobile ? "imagesContainerMobile" : "imagesContainer"}>
                {images.map(
                (i, index) => 
                    (
                    <div key={index}>
                        <ArtImage key={index} src={i}/>
                    </div>
                    )
                )}
            </div>
        </div>
    )
}