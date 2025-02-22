import useIsMobile from "../hooks/useIsMobile"
import ArtImage from "./ArtImage"
import Line from "./Line";
import "./style/ArtCard.css"

interface Props {
    title: string,
    images: Array<string>
}

export default function ArtCard({title, images}: Props) {
    const isMobile = useIsMobile();
    
    return (
        <div className={"artCard"}>
            <h3 className="artTitle textCenter">{title}</h3>
            <Line/>
            <br/>
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