import { createContext, useState } from "react"
import ArtCard from "../components/ArtCard"
import "./style/Art.css"
import ArtModal from "../components/ArtModal";

import PageHeader from "../components/PageHeader"

interface ArtContext {
    onClick: (i:string) => void,
}

export const ArtContext = createContext<ArtContext>({onClick: () => {}});
let img = "";

export default function Art() {
    const [showModal, setShowModal] = useState(false);


    function onClick(i:string): void {
        img = i;
        // send image to art modal somehow
        setShowModal(true);
    }
    console.log(img);
    return (
        <>
            <PageHeader title="Visual">
                In addition to being a technical-minded engineer, I dabble in art asset creation.
                I can make a wide variety of assets from Vector-based UI elements, low-res pixel art, 
                high-res illustration, and 3d models.
            </PageHeader>

            <div className="trayContainer">
                <ArtContext.Provider value={{onClick: onClick}}>
                    <ArtModal show={showModal} setShow={setShowModal} img={img}/>
                    <ArtCard title="Vector Art / UI" images={["ui1.png", 'ui2.png', 'ui3.png', 'ui4.png', 'ui5.png']}/>
                    <ArtCard title="Track Cover Art" images={["sk24 icon.png","track1.PNG","track2.png","track3.png","track4.png",]}/>
                    <ArtCard title="Fantasy Card Art" images={["vivia full.png", "card1.png", "card2.png", "card3.png", "card4.png"]}/>
                    <ArtCard title="Pixel Art" images={["train_idle2.gif", "pixel1.png", "pixel2.png", "train_hurt2.gif", "train_lunge2.gif",]}/>
                    <ArtCard title="3D Models" images={["3d1.PNG","3d2.JPG","3d3.PNG","dirtymech.PNG","jerboa.PNG",]}/>
                </ArtContext.Provider>
            </div>
        </>
    )
}