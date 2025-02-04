import { Link } from "react-router-dom"
import "./Topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            Hi im topbar.<br/>
            <Link className="barLink" to="">About</Link>
            <Link className="barLink" to="">Work</Link>
            <Link className="barLink" to="">Programming</Link>
            <Link className="barLink" to="">Music</Link>
            <Link className="barLink" to="">Art</Link>
        </div>
    )
}