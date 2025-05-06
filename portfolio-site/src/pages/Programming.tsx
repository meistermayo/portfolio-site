import WorkCard from "../components/WorkCard"
import "./style/Programming.css"
import PageHeader from "../components/PageHeader"
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import FadeInWrapper from "../components/FadeInWrapper"

export default function Programming() {
    const displayGameEngine = false;

    return (
        <FadeInWrapper>
            <PageHeader title="Projects">
                I've worked with a lot of technologies and languages in my career.
                Here are some projects I've worked on in my freetime, involving C++, C#, and Typescript. 
            </PageHeader>
            <br/>

            <WorkCard title={"That Time I Got Trapped In An Office Dungeon"} img={"ttigtiaod.png"} link={"//heylezl.itch.io/that-time-i-got-trapped-in-a-office-dungeon-with-a-headset-strapped-to-my-face"}>
                Chicaghoul 2024 gamejam project that reached over <b>100,000 plays</b> on gx.games! I handled HLSL coding, C# scripting, and audio.
            </WorkCard>
            <WorkCard title={"Pillars of Creation"} img={"POC.png"} link={"//depaulgames.cdm.depaul.edu/pillars-of-creation/"}>
                My Senior Project was a real-time online trading card game, developed with C# in Unity.
                During this project, I solved difficult networking bugs involving race conditions.
            </WorkCard>
            {displayGameEngine && 
            <WorkCard title={"Game Engine"} img={"spiderhead.jpg"} link={"/IK"} >
                Developed IK and animation systems and API for a custom game engine at DePaul University, in C++.
            </WorkCard>
            }
            <WorkCard title={"Itch.io"} img={"dwellingicon_edited.jpg"} link={"//lukemayo.itch.io/"}>
                A large collection of game projects. My best work in Unity and Unreal on display.
            </WorkCard>
            <WorkCard title={"This Website"} img={"thiswebsite.PNG"} link={"//lukemayo.net"}>
                You're looking at it!
                Built in
                <img src={reactLogo} className="logoIcon" alt="React logo" />
                React.js
                with
                <img src={viteLogo} className="logoIcon" alt="Vite logo" />
                Vite!
            </WorkCard>
        </FadeInWrapper>
    );
}