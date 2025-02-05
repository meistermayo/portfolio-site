import ArtImage from "./ArtImage"
import "./style/ArtTray.css"

interface Props {
    title: string,
    images: Array<string>
}

export default function ArtTray({title, images}: Props) {
    return (
        <div className="container">
            <h2>{title}</h2>
            <div className="imageContainer">
                {images.map((i) => 
                    (
                        <div>
                            <ArtImage key={i} src={i}/>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}