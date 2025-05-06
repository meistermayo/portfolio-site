import { motion } from "framer-motion"

import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export default function FadeInWrapper({children}: Props) 
{
    return (<motion.div
    initial = {{ opacity: 0 }}
    animate = {{ opacity: 1 }}
    exit = {{ opacity: 0 }}
    transition = {{ duration: 0.75 }}>
        {children}
    </motion.div>);
}