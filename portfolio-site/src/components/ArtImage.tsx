import "./style/ArtImage.css"

interface Props {
    src: string
}

export default function ArtImage({src}: Props) {
    return (
        <div className="imageWrapper" style={{width: 128, height: 128, overflow: "hidden"}}>
            <img className="image" src={src}/>
        </div>
    )
}