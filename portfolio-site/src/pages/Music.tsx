import SoundcloudCard from "../components/SoundcloudCard"
import SoundcloudPlaylistCard from "../components/SoundcloudPlaylistCard"
import "./style/Music.css"

export default function Music(){
    return (
        <div>
            <div>
            I love making music from all sides. I do composition, sound design, and mixing and mastering on the music I make. 
            Recently I've been making various flavors of EDM heavily focusing on sound design, making novel bass sounds. 
            I've made lots of music of various genres. I've made orchestral tracks, lofi, chiptunes, and various flavors of EDM.
            </div>
                <h1>Bass Music</h1>
                <div className="container">
                    <SoundcloudCard track_id="1743224562"/>
                    <SoundcloudCard track_id="1683545013"/>
                </div>
                    <SoundcloudPlaylistCard playlist_id="1658762536"/>
                    <h1>Orchestral/Cinematic Music</h1>
            <SoundcloudPlaylistCard playlist_id="1682587152"/>
            <h1>Lofi</h1>
            <SoundcloudPlaylistCard playlist_id="911011003"/>
            <h1>Chiptune</h1>
            <SoundcloudPlaylistCard playlist_id="1107505642"/>
        </div>
    )
}