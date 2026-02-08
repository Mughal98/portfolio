"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function MediaModal({ media, index, onClose, onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  // Update index when prop changes
  useEffect(() => {
    setCurrentIndex(index);
    setIsLoading(true);
  }, [index]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle video source changes - CRITICAL for navigation
  useEffect(() => {
    if (media.type === "video" && videoRef.current) {
      const currentItem = media.items[currentIndex];

      // Force reload the video
      setIsLoading(true);
      videoRef.current.src = currentItem.video;
      videoRef.current.load();

      // Auto-play when ready
      const handleLoaded = () => {
        setIsLoading(false);
        videoRef.current.play().catch((err) => {
          console.log("Auto-play prevented:", err);
          setIsLoading(false);
        });
      };

      videoRef.current.addEventListener("loadeddata", handleLoaded, {
        once: true,
      });

      return () => {
        videoRef.current?.removeEventListener("loadeddata", handleLoaded);
      };
    }
  }, [currentIndex, media.type, media.items]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      onNavigate(newIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < media.items.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      onNavigate(newIndex);
    }
  };

  const handleDragStart = (e) => {
    if (media.type === "video") return; // No drag for videos
    setIsDragging(true);
    setStartX(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging || media.type === "video") return;
    const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    setDragDistance(currentX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging || media.type === "video") return;
    if (Math.abs(dragDistance) > 100) {
      if (dragDistance > 0) handlePrev();
      else handleNext();
    }
    setIsDragging(false);
    setDragDistance(0);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (media.type === "video" && videoRef.current) {
        // For videos: Arrow keys seek forward/backward
        if (e.key === "ArrowLeft") {
          videoRef.current.currentTime = Math.max(
            0,
            videoRef.current.currentTime - 5,
          );
        } else if (e.key === "ArrowRight") {
          videoRef.current.currentTime = Math.min(
            videoRef.current.duration,
            videoRef.current.currentTime + 5,
          );
        }
      } else if (media.type === "image") {
        // For images: Arrow keys navigate
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, media.type]);

  const currentItem = media.items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div
        className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center px-4 md:px-20"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{
          cursor:
            media.type === "image"
              ? isDragging
                ? "grabbing"
                : "grab"
              : "default",
          transform: isDragging ? `translateX(${dragDistance}px)` : "none",
          transition: isDragging ? "none" : "transform 0.3s ease",
        }}
      >
        {media.type === "video" ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Loading spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 border-4 border-[#ff5a0d] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Video element - key forces remount on index change */}
            <video
              key={currentIndex}
              ref={videoRef}
              controls
              className="max-w-full max-h-full rounded-lg"
              preload="metadata"
              playsInline
              onLoadedData={() => setIsLoading(false)}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => setIsLoading(false)}
              onError={(e) => {
                console.error("Video load error:", e);
                console.error("Video URL:", currentItem.video);
                setIsLoading(false);
              }}
            >
              <source src={currentItem.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <img
            key={currentIndex}
            src={currentItem.url}
            alt={`Item ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg select-none"
            draggable={false}
            loading="lazy"
          />
        )}
      </div>

      {/* Navigation buttons - Desktop only */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-colors z-20"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {currentIndex < media.items.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-colors z-20"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm md:text-base">
        {currentIndex + 1} / {media.items.length}
      </div>
    </div>
  );
}
