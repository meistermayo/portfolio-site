import ArtTray from "../components/ArtTray"
import "./style/Art.css"

export default function Art() {
    return (
        <>
            <div>
                I work in raster-based art software as well as vector-based art software.
                In addition to game art, I also make track art for my work on Soundcloud.
                I can make a wide variety of assets from Vector-based UI elements, low-res pixel art, 
                high-res illustration, and 3d models
            </div>

            <div className="trayContainer">
                <ArtTray title="Vector Art / UI" images={["ui1.png", 'ui2.png', 'ui3.png', 'ui4.png', 'ui5.png']}/>
                <ArtTray title="Track Cover Art" images={["sk24 icon.png","track1.PNG","track2.png","track3.png","track4.png",]}/>
                <ArtTray title="Fantasy Card Art" images={["vivia full.png", "card1.png", "card2.png", "card3.png", "card4.png"]}/>
                <ArtTray title="Pixel Art" images={["train_idle2.gif", "pixel1.png", "pixel2.png", "train_hurt2.gif", "train_lunge2.gif",]}/>
                <ArtTray title="3D Models" images={["3d1.PNG","3d2.JPG","3d3.PNG","dirtymech.PNG","jerboa.PNG",]}/>
            </div>
        </>
    )
}