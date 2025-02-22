import SuperText from "../components/SuperText";
import "./style/Home.css"
import { Link } from "react-router-dom";
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import useIsMobile from "../hooks/useIsMobile";
import WorkCard from "../components/WorkCard";

export default function Home() {
    const isMobile = useIsMobile();

    return (
        <div>
            <div className={isMobile ? "homeImageWrapperMobile" : "homeImageWrapper"}>
                <img className="profileImage" src="/me af.jpg"/>
            </div>
            <h1>LUKE MAYO</h1>
            <Link to="Work"><u>View My Work</u></Link>
            <p>
                Savvy software engineer with work experience in C++, C# and Typescript.
                <br/>
                <br/>
                Built in<br></br>
                <img src={reactLogo} className="logoIcon" alt="React logo" />
                React.js
                +
                <img src={viteLogo} className="logoIcon" alt="Vite logo" />
                Vite!
                <br/>
                <br/>
            </p>

            <div>
                <p>
                    Here's some places I've worked!
                </p>

                <WorkCard img={"disbelief.png"} title={"Programmer I"} link={"//disbelief.com/"} desc={"Solved close-to-the-wire graphics issues on Minecraft's RenderDragon release and nativized UE4 Blueprints for an upcoming VR game, improving editor load times."}/>
                <WorkCard img={"roblox.png"} title={"Gameplay Engineer"} link={"//roblox.com/games/5611648039/Murder-Party"} desc={"Collaborated with a fully-remote game development team for the Roblox platform. Fully owned features from concept to completion, achieving top-of-the-platform retention on a self-led project."}/>
                <WorkCard img={"somasim.jpg"} title={"UI Programmer"} link={"//store.steampowered.com/app/1386780/City_of_Gangsters/"} desc={"Provided UI support for prohibition-era strategy game City of Gangsters. Maintained and updated existing UI Prefabs and Scripts. Implemented new ones for use throughout the game, following specifications."}/>
                <WorkCard img={"mk11.jpg"} title={"Junior Associate Software Engineer"} link={"//mortalkombat.com/en-us"} desc={"Worked on Mortal Kombat 11 with the Koretech team to develop and extend tools to assist the gameplay programmers and designers. Work involved a survey of tools and technologies, porting code from C++ to C#, developing web dashboards in Vue.js, and implementing Qt as a UI solution."}/>
                <WorkCard img={"american medina.png"} title={"Software Engineer"} link={"//chicagohistory.org/american-medina-stories-of-muslim-chicago-2/"} desc={"Developed a Unity app from the ground up for the Chicago History Museum's American Medina exhibit. Created editor extensions to make managing multi-language text easier."}/>
                <WorkCard img={"days of doom.jpg"} title={"Gameplay Programmer"} link={"//facebook.com/DaysofDoomGame/"} desc={"Developed gameplay components and systems for a mobile game in UE4 at Phosphor Studios. Worked primarily in C++, exposing functionality to designers."}/>
            </div>
            <SuperText>I'm Super!</SuperText>

        </div>
    )
}