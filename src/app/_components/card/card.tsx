import classNames from "classnames";
import { FC } from "react";
import { CardProps } from "./card.types";

export const Card: FC<CardProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={classNames(
        "border border-base-200 bg-white rounded-lg p-2",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
