import clsx from "clsx";
import { useState } from "react";
import IcChevronDown from "../Icons/IcChevronDown";
import s from "./Select.module.scss";

interface SelectProps {
  className?: string;
  options: string[];
  placeholder?: string;
  label?: string;
}

const Select = ({ className, label, placeholder, options, ...props }: SelectProps) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };
  return (
    <div className={clsx(s._Wrapper, className)} {...props}>
      {label && <label className={s._Label}>{label}</label>}
      <div className={clsx(s._Select, "select")} onClick={() => setOpen(!open)}>
        {selected && <div className={s._Selected}>{selected}</div>}
        {!selected && <div className={s._Placeholder}>{placeholder}</div>}
        <IcChevronDown className={clsx(s._Icon, open && s._Open)} />
      </div>
      <div className={clsx(s._OptionsContainer, open && s._Open)}>
        <div className={s._Options}>
          {options.map((option, index) => (
            <div className={s._Option} key={index} onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Select;
