
"use client";
import React from 'react'
import NextImage  from "next/image"; 
interface ImageInterface {
    className?: string;
    src: string;
    alt?: string;
    width: number;
    height: number;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }
function Image({ src, alt = "", className, width, height, onClick }: ImageInterface) {
    const imagePrefix = process.env.NEXT_PUBLIC_ENV  === "development"? src : `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${src}`
    return (
      <NextImage
        src={imagePrefix}
        alt={alt}
        className={className}
        width={width}
        height={height}
        
        onClick={onClick}
      />
    )
}

export default Image



