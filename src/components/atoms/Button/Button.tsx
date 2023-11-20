import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./Button.module.scss";
import clsx from "clsx";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconOnly?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
}

const Button = ({ children, className, variant = "primary", ...props }: IButtonProps) => {
  return (
    <div className={s._Wrapper}>
      <button className={clsx(s._Button, s[`${variant}`], className)} {...props}>
        {props.startIcon && <span className={s._StartIcon}>{props.startIcon}</span>}
        {children}
        {props.endIcon && <span className={s._EndIcon}>{props.endIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
