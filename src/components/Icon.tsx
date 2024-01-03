"use client";
import React from "react";
import Image from "next/image";

interface Icon {
  className?: string;
  src: string;
  alt?: string;
  width: number;
  height: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Icon({ src, alt = "", className, width, height, onClick }: Icon) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority
      onClick={onClick}
    />
  );
}

export default Icon;
