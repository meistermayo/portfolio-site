import "./style/SoundcloudCard.css"

interface Props{
    track_id: string
}
export default function SoundcloudCard({track_id}: Props) {
    return (
        <div>
            <div className="cardBack">
                <iframe allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track_id}%3Fsecret_token%3Ds-6e5GpEGVcBq&color=%23d10073&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}>
                </iframe>
            </div>
        </div>
    )
}