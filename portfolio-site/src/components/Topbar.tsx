import { Link } from "react-router-dom"
import "./style/Topbar.css"
import useIsMobile from "../hooks/useIsMobile";

export default function Topbar() {
    const isMobile = useIsMobile();

    return (
        <div className="topbar">
            <h3>Luke Mayo<br/></h3>
            
            <div className={isMobile ? "linksMobile" : "links"}>
                <Link to="">About</Link>
                <Link to="Work">Work</Link>
                <Link to="Programming">Programming</Link>
                <Link to="Music">Music</Link>
                <Link to="Art">Art</Link>
            </div>
        </div>
    )
}