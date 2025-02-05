import "./style/Home.css"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div style={{margin: "auto", width: 438, height: 438}}>
                <img className="profileImage" src="/me af.jpg"/>
            </div>
            <h1>LUKE MAYO</h1>
            <Link to="Work"><u>View My Work</u></Link>
            <p>Hi, I'm Luke! I'm a technical creative from Chicago with a habit of wearing lots of hats. 
                I'm an avid game developer, proficient in C++ and C#, with a passion for design and a hand in art and music. 
                When time allows, I find myself digging into editor extensions, and exploring ways to juice up deliverables. 
                In my career to date, I've worked with AAA studios as well as independent and freelance groups. 
                Feel free to browse my website and check out the stuff I'm working on!</p>
        </div>
    )
}