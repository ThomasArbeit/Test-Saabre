"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

export default function ImageWithFallback({ src, fallbackSrc, alt, ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
      <Image
        src={imgSrc}
        alt={alt}
        objectFit="cover"
        layout="fill"
        placeholder="blur"
        blurDataURL={fallbackSrc}
        onError={() => setImgSrc(fallbackSrc)}
      />
  );
}