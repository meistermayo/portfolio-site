import { ReactNode } from "react";
import "./style/WorkCard.css"

interface Props {
    img: string;
    title: string;
    link: string;
    techs: string;
    children: ReactNode;
}

export default function WorkCard({img, link, title, techs, children}: Props) {
    return (
        <>
            {false && (<>{img}, {link}</>)}
            <details><summary>{title} - <i>{techs}</i></summary><ul><li>{children}</li></ul></details>
        </>
    )
}