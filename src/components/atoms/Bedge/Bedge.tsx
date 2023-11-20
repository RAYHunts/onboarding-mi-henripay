import clsx from "clsx";
import { HTMLAttributes } from "react";
import s from "./Bedge.module.scss";

interface BedgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  variant?: "primary" | "secondary" | "green" | "red";
  className?: string
}
const Bedge = ({ children, variant = "primary", className, ...props }: BedgeProps) => {
  return (
    <span className={clsx(s._Bedge, s[variant], className)} {...props}>
      {children}
    </span>
  );
};

export default Bedge;
