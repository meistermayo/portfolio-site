import { ReactNode } from "react"
import "./style/Content.css"
import useIsMobile from "../hooks/useIsMobile"

interface Props {
    children?: ReactNode
}

export default function Content({children}: Props) {
    const isMobile = useIsMobile();

    return <div className={isMobile ? "contentMobile" : "content"}>
        {children}
    </div>
}