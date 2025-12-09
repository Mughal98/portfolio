"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative aspect-video rounded-2xl overflow-hidden">
        <img
          src={images[current].url}
          alt={`Process ${current + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      <button
        onClick={prev}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? "bg-[#ff5a0d]" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
