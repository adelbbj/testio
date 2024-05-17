/* eslint-disable react/display-name */
import classNames from "classnames";
import { TextboxProps } from "./textbox.types";
import { forwardRef } from "react";

export const Textbox: React.FC<TextboxProps> = forwardRef<
  HTMLInputElement,
  TextboxProps
>(
  (
    {
      variant = "ghost",
      type = "text",
      className,
      size = "normal",
      label,
      hasError,
      ...rest
    },
    ref
  ) => {
    const classes = classNames("textbox", "w-full", className, {
      [`textbox-${variant}`]: variant,
    });
    return (
      <div
        className={classNames(
          "w-full",
          "ring-1 ring-base-200 rounded-lg py-2 px-4 bg-white focus-within:ring-primary transition-colors focus-within:ring-2",
          { "focus-within:ring-error": hasError }
        )}
      >
        {label && (
          <label className="text-base-500 block" htmlFor={rest.name}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={rest.name}
          className={classes}
          {...rest}
        />
      </div>
    );
  }
);

export default Textbox;
