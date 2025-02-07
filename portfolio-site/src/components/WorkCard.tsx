import "./style/WorkCard.css"

interface Props {
    img: string;
    title: string;
    link: string;
    desc: string;
}

export default function WorkCard({img, link, title, desc}: Props) {
    return (
        <div>
            <div className="background">
                <div className="workImgWrapper">
                    <img className="workImg" src={img}></img>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href={link}><button>More Info</button></a>
            </div>
        </div>
    )
}