"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Play, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { SHORTS_DATA } from "@/data/portfolio";
import { useModal } from "@/app/providers/ModalProvider";
import Link from "next/link";
import {
  fadeInLeft,
  staggerContainer,
  gridItem,
  ANIMATION_CONFIG,
} from "@/config/animations";

export default function ShortsPage() {
  const { openModal } = useModal();
  const { shorts: shortsConfig } = PORTFOLIO_CONFIG.editPage;
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const categories = useMemo(() => {
    const allCategories = new Set();
    SHORTS_DATA.forEach((video) => {
      if (video.category) {
        video.category.forEach((cat) => allCategories.add(cat));
      }
    });
    return ["all", ...Array.from(allCategories).sort()];
  }, []);

  const filteredVideos = useMemo(() => {
    if (selectedFilter === "all") return SHORTS_DATA;
    return SHORTS_DATA.filter(
      (video) => video.category && video.category.includes(selectedFilter),
    );
  }, [selectedFilter]);

  if (!shortsConfig.enabled) {
    return (
      <div className="pt-24 pb-20 px-6 min-h-screen flex items-center justify-center">
        <p className="text-white/50 text-xl">
          This section is currently unavailable.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1 className="text-5xl font-bold mb-3" {...fadeInLeft}>
          {shortsConfig.title}
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
          {shortsConfig.description}
        </motion.p>

        {/* Desktop Layout */}
        <motion.div
          className="hidden md:flex flex-wrap gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_CONFIG.fadeIn.duration,
            delay: 0.2,
          }}
        >
          <Link href="/edit/shorts">
            <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-[#ff5a0d] text-white">
              Shorts
            </button>
          </Link>
          {PORTFOLIO_CONFIG.editPage.longForm.enabled && (
            <Link href="/edit/long">
              <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-white/10 text-white/70 hover:bg-white/20">
                Long Form
              </button>
            </Link>
          )}

          <div ref={dropdownRef} className="relative ml-auto">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-6 py-3 rounded-full text-lg font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <span className="capitalize">
                {selectedFilter === "all" ? "All Categories" : selectedFilter}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-2xl z-50"
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedFilter(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-6 py-3 text-left capitalize transition-colors ${
                        selectedFilter === category
                          ? "bg-[#ff5a0d] text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {category === "all" ? "All Categories" : category}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          className="flex md:hidden flex-col gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_CONFIG.fadeIn.duration,
            delay: 0.2,
          }}
        >
          <div className="flex gap-4">
            <Link href="/edit/shorts" className="flex-1">
              <button className="w-full px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-[#ff5a0d] text-white">
                Shorts
              </button>
            </Link>
            {PORTFOLIO_CONFIG.editPage.longForm.enabled && (
              <Link href="/edit/long" className="flex-1">
                <button className="w-full px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-white/10 text-white/70 hover:bg-white/20">
                  Long Form
                </button>
              </Link>
            )}
          </div>

          <div ref={dropdownRef} className="relative w-full">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-6 py-3 rounded-full text-lg font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <span className="capitalize">
                {selectedFilter === "all" ? "All Categories" : selectedFilter}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-2xl z-50"
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedFilter(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-6 py-3 text-center capitalize transition-colors ${
                        selectedFilter === category
                          ? "bg-[#ff5a0d] text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {category === "all" ? "All Categories" : category}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {filteredVideos.map((video, idx) => (
              <motion.div
                key={video.video}
                variants={gridItem}
                onClick={() =>
                  openModal({ type: "video", items: filteredVideos }, idx)
                }
                className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group"
                whileHover={{ scale: ANIMATION_CONFIG.hover.scale }}
                whileTap={{ scale: ANIMATION_CONFIG.tap.scale }}
                transition={{ duration: ANIMATION_CONFIG.hover.duration }}
              >
                <img
                  src={video.thumbnail}
                  alt={`Short ${idx + 1}`}
                  loading={idx < 8 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50 text-xl">
              No videos found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
