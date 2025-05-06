import SoundcloudPlaylistCard from "../components/SoundcloudPlaylistCard"
import PageHeader from "../components/PageHeader"

import "./style/Music.css"
import useIsMobile from "../hooks/useIsMobile"
import FadeInWrapper from "../components/FadeInWrapper"

export default function Music(){
    const isMobile = useIsMobile()

    return (
        <FadeInWrapper>
            <PageHeader title="Audio">
                In addition to programming, I enjoy music composition and sound design as a hobby. I've written a wide variety of compositions using Ableton Live 10 Suite.
            </PageHeader>

            <div style={{paddingTop: 32, paddingBottom:32}}>

                <div className={isMobile ? "musicContainerMobile" : "musicContainer"}>
                    <div>
                        <h3>EDM / Bass Music</h3>
                        <SoundcloudPlaylistCard playlist_id="1658762536"/>
                    </div>
                    <div>
                        <h3>Orchestral</h3>
                        <SoundcloudPlaylistCard playlist_id="1682587152"/>
                    </div>
                    <div>
                        <h3>Lofi</h3>
                        <SoundcloudPlaylistCard playlist_id="911011003"/>
                    </div>

                    <div>
                        <h3>Chiptune</h3>
                        <SoundcloudPlaylistCard playlist_id="1107505642"/>
                    </div>
                </div>

            </div>
        </FadeInWrapper>
    );
}