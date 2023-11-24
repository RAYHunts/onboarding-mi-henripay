import clsx from "clsx"
import s from "./Select.module.scss"
import IcChevronDown from "../Icons/IcChevronDown"
import { useState } from "react"

interface SelectProps {
    className?: string
    options: string[],
    placeholder?: string
}

const Select = ({ className, placeholder,options, ...props }: SelectProps) => {
    const [selected, setSelected] = useState<string | undefined>(undefined)
    const [open, setOpen] = useState<boolean>(false)

    const handleSelect = (option: string) => {
        setSelected(option)
        setOpen(false)
    }
    return (
        <div className={clsx(s._Wrapper, className)} {...props}>
            <div className={clsx(s._Select, "select")} onClick={() => setOpen(!open)}>
                {selected && <div className={s._Selected}>{selected}</div>}
                {!selected && <div className={s._Placeholder}>{placeholder}</div>} 
                <IcChevronDown className={s._Icon} />
            </div>
            <div className={clsx(s._Options, open && s._Open)}>
                {options.map((option, index) => (
                    <div className={s._Option} key={index} onClick={() => handleSelect(option)}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
} 
export default Select
