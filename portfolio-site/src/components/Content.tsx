import { ReactNode } from "react"
import "./style/Content.css"

interface Props {
    children?: ReactNode
}

export default function Content({children}: Props) {
    return <div className="content">
        {children}
    </div>
}