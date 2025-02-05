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
            <div className="container">
                <SoundcloudCard track_id="1743224562"/>
                <SoundcloudCard track_id="1683545013"/>
                <SoundcloudPlaylistCard playlist_id="1658762536"/>
                <SoundcloudPlaylistCard playlist_id="1107505642"/>
                <SoundcloudPlaylistCard playlist_id="911011003"/>
                <SoundcloudPlaylistCard playlist_id="1682587152"/>
                <SoundcloudPlaylistCard playlist_id="1678633356"/>
            </div>
        </div>
    )
}