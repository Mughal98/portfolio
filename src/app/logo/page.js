"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { LOGOS_DATA } from "@/data/portfolio";
import {
  fadeInLeft,
  staggerContainer,
  gridItem,
  ANIMATION_CONFIG,
} from "@/config/animations";

export default function LogoPage() {
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [currentChildIndex, setCurrentChildIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const { logoPage: logoConfig } = PORTFOLIO_CONFIG;

  if (!logoConfig.enabled) {
    return (
      <div className="pt-24 pb-20 px-6 min-h-screen flex items-center justify-center">
        <p className="text-white/50 text-xl">
          This section is currently unavailable.
        </p>
      </div>
    );
  }

  const openLogoModal = (logo) => {
    setSelectedLogo(logo);
    setCurrentChildIndex(0);
  };

  const closeModal = () => {
    setSelectedLogo(null);
    setCurrentChildIndex(0);
  };

  const handlePrev = () => {
    if (currentChildIndex > 0) {
      setCurrentChildIndex(currentChildIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedLogo && currentChildIndex < selectedLogo.children.length - 1) {
      setCurrentChildIndex(currentChildIndex + 1);
    }
  };

  // Touch/Mouse drag handlers for mobile swipe
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
      if (dragDistance > 0) handlePrev();
      else handleNext();
    }
    setIsDragging(false);
    setDragDistance(0);
  };

  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1 className="text-5xl font-bold mb-3" {...fadeInLeft}>
          {logoConfig.title}
        </motion.h1>
        <motion.p
          className="text-white/60 text-lg mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: ANIMATION_CONFIG.fadeIn.duration,
            delay: 0.1,
          }}
        >
          {logoConfig.description}
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {LOGOS_DATA.map((logo, idx) => (
            <motion.div
              key={logo.id}
              variants={gridItem}
              onClick={() => openLogoModal(logo)}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group bg-white/5"
              whileHover={{ scale: ANIMATION_CONFIG.hover.scale }}
              whileTap={{ scale: ANIMATION_CONFIG.tap.scale }}
              transition={{ duration: ANIMATION_CONFIG.hover.duration }}
            >
              <img
                src={logo.mainImage}
                alt={logo.title}
                loading={idx < 10 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">
                  {logo.title}
                </h3>
                <p className="text-white/70 text-sm">{logo.description}</p>
                <p className="text-[#ff5a0d] text-xs mt-2">
                  {logo.children.length} images
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo Modal */}
        {selectedLogo && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div
              className="relative max-w-6xl max-h-[80vh] w-full h-full flex items-center justify-center px-4 md:px-20"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              style={{
                cursor: isDragging ? "grabbing" : "grab",
                transform: isDragging
                  ? `translateX(${dragDistance}px)`
                  : "none",
                transition: isDragging ? "none" : "transform 0.3s ease",
              }}
            >
              <img
                src={selectedLogo.children[currentChildIndex].url}
                alt={`${selectedLogo.title} - Image ${currentChildIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg select-none"
                draggable={false}
              />
            </div>

            {/* Navigation buttons - Desktop only */}
            {currentChildIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {currentChildIndex < selectedLogo.children.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Image counter and logo title */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-semibold mb-1">
                {selectedLogo.title}
              </p>
              <p className="text-white/70 text-sm md:text-base">
                {currentChildIndex + 1} / {selectedLogo.children.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
