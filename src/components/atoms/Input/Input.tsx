import clsx from "clsx";
import { InputHTMLAttributes, forwardRef, ReactNode } from "react";
import s from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  label?: string;
  starticon?: ReactNode;
  endicon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, variant = "primary", ...props }, ref) => {
  return (
    <div className={s._Wrapper}>
      {props.label && (
        <label htmlFor={props.id} className={clsx(s._Label, props.required && s._Required)}>
          {props.label}
        </label>
      )}
      {props.starticon && <span className={s._StartIcon}>{props.starticon}</span>}
      <input ref={ref} className={clsx(className, s[variant])} {...props} />
      {props.endicon && <span className={s._EndIcon}>{props.endicon}</span>}
    </div>
  );
});

export default Input;
