import "./style/ArtImage.css"

interface Props {
    src: string
}

export default function ArtImage({src}: Props) {
    return (
        <div className="imageWrapper">
            <img className="image" src={src}/>
        </div>
    )
}