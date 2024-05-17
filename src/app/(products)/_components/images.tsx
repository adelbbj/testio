"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/app/_components/skeleton";

export const Images = ({
  image,
  name,
  width,
  height,
  priority,
  sizes,
}: {
  image: [string];
  name: string;
  width: number;
  height: number;
  priority: boolean;
  sizes: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoadComplete = () => {
    setImageLoaded(true);
  };

  return (
    <div className={!imageLoaded ? "relative" : ""}>
      <Image
        // loader={cloudinaryLoader}
        width={width}
        height={height}
        src={image[0]}
        alt={name}
        priority={priority}
        className="w-full aspect-square object-contain"
        onLoad={handleImageLoadComplete}
        sizes={sizes}
      />
      <div
        className={
          !imageLoaded
            ? "absolute top-0 right-0 w-full aspect-square bg-base-content"
            : "hidden"
        }
      >
        <Skeleton className="w-full aspect-square rounded-b-none" />
      </div>
    </div>
  );
};
