"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider({ rawVideo, gradedVideo }) {
  const containerRef = useRef(null);
  const rawVideoRef = useRef(null);
  const gradedVideoRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);

  // Keep both videos in sync
  useEffect(() => {
    const rawVid = rawVideoRef.current;
    const gradedVid = gradedVideoRef.current;
    if (!rawVid || !gradedVid) return;

    const syncVideos = () => {
      if (Math.abs(rawVid.currentTime - gradedVid.currentTime) > 0.1) {
        gradedVid.currentTime = rawVid.currentTime;
      }
    };

    const interval = setInterval(syncVideos, 1000);

    // Start both together once ready
    const playBoth = () => {
      rawVid.currentTime = 0;
      gradedVid.currentTime = 0;
      rawVid.play().catch(() => {});
      gradedVid.play().catch(() => {});
    };

    if (rawVid.readyState >= 2 && gradedVid.readyState >= 2) {
      playBoth();
    } else {
      rawVid.addEventListener("canplay", playBoth, { once: true });
    }

    return () => {
      clearInterval(interval);
      rawVid.removeEventListener("canplay", playBoth);
    };
  }, []);

  const updateSliderPosition = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    },
    [isDragging, updateSliderPosition],
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      updateSliderPosition(e.touches[0].clientX);
    },
    [isDragging, updateSliderPosition],
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full aspect-video rounded-lg overflow-hidden select-none cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Graded video - full width, base layer */}
      <video
        ref={gradedVideoRef}
        src={gradedVideo}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Raw video - clipped by slider position */}
      <div
        className="absolute inset-0 h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <video
          ref={rawVideoRef}
          src={rawVideo}
          muted
          loop
          playsInline
          preload="auto"
          className="h-full object-cover"
          style={{
            width: `${(100 / sliderPosition) * 100}%`,
            maxWidth: "none",
          }}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium pointer-events-none">
        Raw
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium pointer-events-none">
        Graded
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-black/40 rounded-full" />
            <div className="w-0.5 h-4 bg-black/40 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
