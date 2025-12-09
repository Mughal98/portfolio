"use client";

import Image from "next/image";
import { useState } from "react";

export default function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  onClick,
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`} onClick={onClick}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-300 ${
          isLoading ? "blur-sm" : "blur-0"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        sizes="(max-width: 768px) 33vw, 25vw"
        priority={priority}
        quality={85}
      />
    </div>
  );
}
