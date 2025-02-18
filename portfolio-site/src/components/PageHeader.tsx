import Line from "../components/Line"

interface Props {
    title:string,
    children:React.ReactNode,
}

export default function({title, children}: Props){
    return (
        <>
        <Line/>
        <h1>{title}</h1>
        <p>
            {children}
        </p>
        <Line/>
        </>
    );
}