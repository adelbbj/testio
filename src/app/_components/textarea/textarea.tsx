/* eslint-disable react/display-name */
import classNames from "classnames";
import { Size } from "../types/size.type";
import { TextareaProps } from "./textarea.types";
import { forwardRef } from "react";

const sizeClasses: Record<Size, string> = {
  tiny: "textarea-xs",
  small: "textarea-sm",
  normal: "textarea-md",
  large: "textarea-lg",
};

export const Textarea: React.FC<TextareaProps> = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ variant = "ghost", className, size = "normal", label, ...rest }, ref) => {
  const classes = classNames(
    "textbox",
    "w-full",
    className,
    { [`textarea-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size }
  );
  return (
    <div className="ring-1 ring-base-200 rounded-lg py-2 px-4 bg-white focus-within:ring-primary transition-colors focus-within:ring-2">
      {label && (
        <label className="text-base-500 block" htmlFor={rest.name}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={rest.name}
        className={classes}
        rows={4}
        {...rest}
      />
    </div>
  );
});

export default Textarea;
