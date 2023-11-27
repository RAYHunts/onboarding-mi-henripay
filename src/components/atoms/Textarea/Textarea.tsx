import { forwardRef, TextareaHTMLAttributes } from 'react';

import s from './Textarea.module.scss';
import clsx from 'clsx';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, label, ...props }, ref) => {
  return (
    <div className={clsx(s._Wrapper, className)}>
      {label && <label className={clsx(s._Label, props.required && s._Required)}>{label}</label>}
      <textarea ref={ref} {...props} />
    </div>
  );
});

export default Textarea;

