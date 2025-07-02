import "./style/Home.css"
import reactLogo from '../assets/react.svg'
import useIsMobile from "../hooks/useIsMobile";
import WorkCard from "../components/WorkCard";
import FadeInWrapper from "../components/FadeInWrapper";
import Line from "../components/Line";
import { Link } from "react-router-dom";
import resume from "../assets/Resume - Luke Mayo - Software Engineer - 2025.pdf"

export default function Home() {
    const isMobile = useIsMobile();

    return (
        <FadeInWrapper>
            <div className="textCenter">
                <div className={isMobile ? "homeImageWrapperMobile" : "homeImageWrapper"}>
                    <img className="profileImage" src="/me af.jpg"/>
                </div>
                <h1>LUKE MAYO</h1>
                <p>
                    
                    <br/>
                    High-energy and detail-oriented software engineer with work experience in C++, C# and Typescript.<br/>(Also built this website from scratch with
                    <img src={reactLogo} className="logoIcon" alt="React logo" />
                    React.js)
                    <br/>
                    <br/>
                    <a href={resume}>Resume 🔗</a>
                </p>
            </div>

            <div>
                <div style={{height: "300px"}}>
                <h2>Projects</h2>
                <Line/>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", textAlign: "center", padding: "64px"}}>
                    <div ><Link to="MobileDisplay">Mobile Display Web App</Link><br/>(React, Typescript, Python)</div>
                    <div ><Link to="//github.com/meistermayo">Github</Link><br/>(React, C++, C#)</div>
                    <div ><Link to="//lukemayo.itch.io/">Itch.io Games</Link><br/>(C#, C++)</div>
                </div>
                </div>

                
                <h2>Work History</h2>
                <Line/>
                <dl>
                    <dt>2025</dt>
                    <dd>
                        <WorkCard img={"mentia.png"} title={"Mentia.me - Unity Content Developer"} techs="C#/.NET" link={"//mentia.me/"}>
                        Coordinated with artists to enforce 3d asset standards and enhance asset pipeline.
                        Spearheaded the animation retargetting effort leveraging Unity-side IK.
                        Developed gameplay functionality for designers using Ink script. 
                        </WorkCard>
                    </dd>
                    <dt>2024</dt>
                    <dd>
                        <WorkCard img={"gameu.PNG"} title={"Game U - Game Design Instructor"} techs="HTML/CSS/JS, C#/.NET" link={"//www.game-u.com/"}>
                        Taught a variety of courses in HTML/JS/CSS, C#, and Lua.
                        </WorkCard>
                    </dd>
                    <dt>2022-2023</dt>
                    <dd>
                        <WorkCard img={"disbelief.png"} title={"Disbelief - Programmer I"} techs="C++, Graphics" link={"//disbelief.com/"}>
                        Solved close-to-the-wire graphics issues on Minecraft's RenderDragon release and nativized
                        UE4 Blueprints for an upcoming VR game, improving editor load times.
                        </WorkCard>
                    </dd>
                    <dt>2021-2022</dt>
                    <dd>
                        <WorkCard img={"roblox.png"} title={"Playmake - Gameplay Engineer"} techs="Lua, Python" link={"//roblox.com/games/5611648039/Murder-Party"}>
                        Collaborated with a fully-remote game development team for the Roblox platform.
                        Fully owned features from concept to completion, achieving top-of-the-platform retention on a self-led project.
                        </WorkCard>
                    </dd>
                    <dt>2020</dt>
                    <dd>
                        <WorkCard img={"somasim.jpg"} title={"SomaSim - UI Programmer"} techs="C#/.NET" link={"//store.steampowered.com/app/1386780/City_of_Gangsters/"}>
                        Provided UI support for prohibition-era strategy game City of Gangsters.
                        Maintained and updated existing UI Prefabs and Scripts.
                        Implemented new ones for use throughout the game, following specifications.
                        </WorkCard>
                    </dd>
                    <dt>2019</dt>
                    <dd>
                        <WorkCard img={"mk11.jpg"} title={"Netherrealm Studios - Junior Associate Software Engineer"} techs="C++, C#/.NET, Python, Qt" link={"//mortalkombat.com/en-us"}>
                        Joined the infamous studio behind Mortal Kombat 11, building and maintaining tools with the Koretech team.
                        Used a variety of tools and technologies, porting code from C++ to C#,
                        developing web dashboards in Vue.js, and developing a UI solution with Qt.
                        </WorkCard>
                    </dd>
                    <dd>
                        <WorkCard img={"american medina.png"} title={"American Medina - Software Engineer"} techs="C#/.NET" link={"//chicagohistory.org/american-medina-stories-of-muslim-chicago-2/"}>
                        Developed a Unity app from the ground up for the Chicago History Museum's American Medina exhibit.
                        Created editor extensions to make managing multi-language text easier.
                        </WorkCard>
                    </dd>
                    <dt>2018</dt>
                    <dd>
                        <WorkCard img={"days of doom.jpg"} title={"Phosphor (Now PCF) - Gameplay Programmer"} techs="C++" link={"//facebook.com/DaysofDoomGame/"}>
                        Developed gameplay components and systems for a mobile game in UE4 at Phosphor Studios.
                        Worked primarily in C++, exposing functionality to designers.
                        </WorkCard>
                    </dd>
                </dl>

            </div>
        </FadeInWrapper>
    )
}