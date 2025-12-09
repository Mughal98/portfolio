"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  // Touch/Mouse drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    setDragDistance(currentX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    if (Math.abs(dragDistance) > 100) {
      if (dragDistance > 0) prev();
      else next();
    }
    setIsDragging(false);
    setDragDistance(0);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div
        className="relative aspect-video rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{
          transform: isDragging ? `translateX(${dragDistance}px)` : "none",
          transition: isDragging ? "none" : "transform 0.3s ease",
        }}
      >
        <img
          src={images[current].url}
          alt={`Process ${current + 1}`}
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
      </div>

      {/* Arrow buttons - only visible on desktop */}
      <button
        onClick={prev}
        className="hidden md:flex cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="hidden md:flex cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot indicators */}
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
