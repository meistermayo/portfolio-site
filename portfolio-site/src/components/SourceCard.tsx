import useIsPortrait from "../hooks/useIsPortrait";
import "./style/SourceCard.css"

export default function SourceCard() {
    const isPortrait = useIsPortrait();

    return (
        <div className={isPortrait ? "sourceCardBack sourceCardBackPortrait" : "sourceCardBack"}>
            <img style={{width: 32, height: 32}} src={"Octicons-mark-github.svg"} className="logoIcon" alt="React logo" />

            <a className="sourceLink" href="//github.com/meistermayo/portfolio-site/">Check out the source!</a>
        </div>
    );
}