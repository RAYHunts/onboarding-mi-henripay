import { ReactNode, forwardRef } from "react";
import s from "./Card.module.scss";
import clsx from "clsx";

interface CardProps {
  className?: string;
  variant?: "primary" | "secondary" | "gradient" | "outline";
  children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, variant = "primary", children, ...props }, ref) => {
  return (
    <div className={clsx(s._Wrapper, s[variant], className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

export default Card;
