import SoundcloudCard from "../components/SoundcloudCard"
import SoundcloudPlaylistCard from "../components/SoundcloudPlaylistCard"
import PageHeader from "../components/PageHeader"

import "./style/Music.css"

export default function Music(){
    return (
        <div>
            <PageHeader title="Music">
                I love making music from all sides. I do composition, sound design, and mixing and mastering on the music I make. 
                Recently I've been making various flavors of EDM heavily focusing on sound design, making novel bass sounds. 
                I've made lots of music of various genres. I've made orchestral tracks, lofi, chiptunes, and various flavors of EDM.
            </PageHeader>

            <div style={{paddingTop: 32, paddingBottom:32}}>

                <div className="musicContainer">
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
        </div>
    )
}