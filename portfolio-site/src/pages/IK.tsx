import IKCard from "../components/IKCard"
import "./style/IK.css"

export default function IK() {
    return (
        <>
        <h1>INVERSE KINEMATICS AND ANIMATION</h1>
        <IKCard title={"Game Engine II"} flip={true} video={"SpiderHead.MOV"} desc={(<div>
            For DePaul's Game Engine II course, I implemented an Inverse Kinematics solver, as well as an animation backend, 
            for my custom game engine, both in C++. <br/><br/><br/>
            
            Animation is critical to a game's success, and with procedural animation becoming more common, Inverse Kinematics is needed.
        </div>)}/>

        <IKCard title={"IK and Fabrik"} flip={false} video={"IK.mp4"} desc={(<div>
            The solver I used for Inverse Kinematics is known as <a href="//andreasaristidou.com/FABRIK.html">FABRIK (Forwards and Backwards Reaching Inverse Kinematics). </a>
            It is a simple algorithm that works in two parts.
            <br/><br/>
            For the "Forwards Reaching" part, it points bones in an IK Chain towards their destination, and moves them towards it. 
            The "Backwards Reaching" part pulls all of the bones back into place.
            <br/><br/>
            This algorithm requires an understanding of world transform matrices, and unit vectors.
            <br/><br/>
            I was selected by the instructor to present my project to the class. 
            <a href="//docs.google.com/presentation/d/1awgrBYyVExXfm1Ny7xwnI_YSn-4Was9srpqxJDrzeqE/edit?usp=sharing">The presentation can be found here, with a longer explanation of IK nuances. (Along with animation)</a>
        </div>)}/>

        <IKCard title={"Animation"} flip={true} video={"SpiderHeadBoss.mp4"} desc={(<div>
            Ultimately, animation is merely the manipulation of values over time.
            <br/><br/>
            My animation system uses simple linear interpolation between matrices and vectors to provide the user an easy 
            interface to set timestamps and values to animate quickly.
            <br/><br/>
            Animations are defined by a hashmap to "AnimationChannels" -- components of an animation, such as 
            interpolations of individual body parts. These AnimationChannels cointain a circular linked list of "Keyframes" 
            that can contain a matrix or a vector. A time value is passed in, and an interpolated matrix or vector is passed out.
            <br/><br/>
            These are stored in AnimationControllers via a hashmap to associate animations with names. Under the hood, the controller 
            has a pointer to its current animation within the hashmap, and the user passes in names to change the animation.
        </div>)}/>
            <h1>RESULT</h1>
            <p>
            The result is a simple, easy to use interface for creating and animating game characters with IK Animations.
            <br/><br/>
            A definite improvement to the system would be adding in bezier curve support to allow the animation's interpolations to be more nuanced.
            </p>
        </>
    )
}