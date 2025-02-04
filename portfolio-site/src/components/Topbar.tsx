import { Link } from "react-router-dom"
import "./style/Topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <h3>Luke Mayo<br/></h3>
            <div className="links">
                <Link to="">About</Link>
                <Link to="">Work</Link>
                <Link to="">Programming</Link>
                <Link to="">Music</Link>
                <Link to="">Art</Link>
                <Link to="MyPage">MyPAge!!!</Link>
            </div>
        </div>
    )
}