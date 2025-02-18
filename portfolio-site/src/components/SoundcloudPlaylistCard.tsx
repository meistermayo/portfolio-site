import "./style/SoundcloudCard.css"

interface Props{
    playlist_id: string
}
export default function SoundcloudPlaylistCard({playlist_id}: Props) {
    return (
        <div className="cardBack">
            <iframe allow="autoplay" style={{height:256+128}} src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playlist_id}%3Fsecret_token%3Ds-6e5GpEGVcBq&color=%23d10073&auto_play=false&hide_related=true&show_user=true&show_reposts=false&visual=false&show_artwork=true`}>
            </iframe>
        </div>
    )
}