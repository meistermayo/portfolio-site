import WorkCard from "../components/WorkCard"
import "./style/Programming.css"
import PageHeader from "../components/PageHeader"

export default function Programming() {
    const displayGameEngine = false;

    return (
        <>
        <PageHeader title="Projects">
            I work in C++ and C#. Included below are a collection of coursework and personal projects in Unity and raw C++.
            Included in this collection are gameplay oriented projects as well as engine-level tools.
        </PageHeader>

        <WorkCard title={"Senior Project"} img={"POC.png"} link={"//depaulgames.cdm.depaul.edu/pillars-of-creation/"} desc={"Pillars of Creation is a real-time online trading card game, developed with C# in Unity. I handled a lot of the coding for this project as well as visual and gameplay design. "}/>
        <WorkCard title={"Github"} img={"BoardMeshModuleSquare_PNG.png"} link={"//github.com/meistermayo"} desc={"Building Unity modules for gameplay features and workflow improvements. Features editor extension work."}/>
        {displayGameEngine && 
        <WorkCard title={"Game Engine"} img={"spiderhead.jpg"} link={"/IK"} desc={"Developed IK and animation systems and API for a custom game engine at DePaul University, in C++."}/>
        }
        <WorkCard title={"Personal Projects"} img={"dwellingicon_edited.jpg"} link={"//lukemayo.itch.io/"} desc={"A slew of Game Jam projects, personal projects, and school projects. Primarily using Unity and C#."}/>
    </>
    )
}