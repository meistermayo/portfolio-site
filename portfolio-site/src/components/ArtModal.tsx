import { useEffect } from "react"
import "./style/ArtModal.css"

interface Props {
    img: string,
    show: boolean,
    setShow: (show:boolean) => void,
}

export default function ArtModal({show, setShow, img}: Props) {
    useEffect(() => {
        function handleEscapeKey(e:KeyboardEvent)
        {
            if (e.code == "Escape")
            {
                setShow(false);
            }
        }

        document.addEventListener('keydown', handleEscapeKey);

        return () => document.removeEventListener('keydown', handleEscapeKey);

    }, []);
    return show && (
        <div className="artModal">
            <button onClick={()=>{setShow(false)}}>X</button>
            <div className="modalImgContainer">
                <img src={img}/>
            </div>
        </div>
    )
}