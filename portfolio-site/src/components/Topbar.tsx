import { Link } from "react-router-dom"
import "./style/Topbar.css"

export default function Topbar() {
    const isMobile = window.innerWidth <= 768;

    return (
        <div className="topbar">
            <h3>Luke Mayo<br/></h3>
            
            <div className={isMobile ? "linksMobile" : "links"}>
                <Link to="">About</Link>
                <Link to="Work">Work</Link>
                <Link to="Programming">Programming</Link>
                <Link to="Music">Music</Link>
                <Link to="Art">Art</Link>
                <Link to="MyPage">MyPAge!!!</Link>
            </div>
        </div>
    )
}