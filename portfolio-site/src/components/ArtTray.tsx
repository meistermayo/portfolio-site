import ArtImage from "./ArtImage"
import "./style/ArtTray.css"

interface Props {
    title: string,
    images: Array<string>
}

export default function ArtTray({title, images}: Props) {
    const isMobile = window.innerWidth <= 768;
    return (
        <div className="trayWrapper">
            <h2>{title}</h2>
            <div className={isMobile ? "imagesContainerMobile" : "imagesContainer"}>
                {images.map((i, index) => 
                    (
                        <div>
                            <ArtImage key={index} src={i}/>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}