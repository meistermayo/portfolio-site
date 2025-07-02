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
                <Link to="Art">Hobbies</Link>
            </div>
        </div>
    )
}