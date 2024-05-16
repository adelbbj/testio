"use client";

import { IconProfile } from "../icons/icons";

const HeaderUserSection = () => {
  return (
    <div className="border border-base-200 rounded-full py-2 px-5 flex justify-center items-center gap-x-1 hover:cursor-pointer hover:bg-base-200/20">
      <IconProfile
        strokeWidth={0}
        className="fill-base-content"
        width={24}
        height={24}
      />
      <span className="text-base leading-5">بردیا ادیبی</span>
    </div>
  );
};

export default HeaderUserSection;
