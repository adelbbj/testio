import { FC } from "react";
import { IconStar } from "../../icons/icons";
import classNames from "classnames";

export const Rating: FC<{ rate: number | string; className?: string }> = ({
  className,
  rate,
}) => {
  return (
    <div className="flex justify-start items-center gap-1">
      <IconStar />
      <span
        className={classNames(
          "text-base-content text-sm font-medium leading-5",
          className
        )}
      >
        {rate}
      </span>
    </div>
  );
};
