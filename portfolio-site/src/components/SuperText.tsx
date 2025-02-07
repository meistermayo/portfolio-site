import { ReactNode } from "react"
import "./style/SuperText.css"

interface Props {
    children?: ReactNode
}

export default function SuperText({children}: Props)
{
    return (
        <div>
            <div className="st_base">
                {children}
            </div>
        </div>
    )
}