import { ReactNode } from "react"
import s from "./Card.module.scss"
import clsx from "clsx"

interface CardProps {
    className?: string
    variant?: "primary" | "secondary" | "gradient" | "outline"
    children: ReactNode
}


const Card = ({ className, variant = "primary", children, ...props }: CardProps) => {
    return (
        <div className={clsx(s._Wrapper, s[`${variant}`], className)} {...props}>
            <div className={s._Content}>
                {children}
            </div>
        </div>
    )
}

export default Card