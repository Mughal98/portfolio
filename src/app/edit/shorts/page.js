"use client";

import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
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

        <motion.div
          className="flex gap-4 mb-12"
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
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {SHORTS_DATA.map((video, idx) => (
            <motion.div
              key={video.id}
              variants={gridItem}
              onClick={() =>
                openModal({ type: "video", items: SHORTS_DATA }, idx)
              }
              className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: ANIMATION_CONFIG.hover.scale }}
              whileTap={{ scale: ANIMATION_CONFIG.tap.scale }}
              transition={{ duration: ANIMATION_CONFIG.hover.duration }}
            >
              <img
                src={video.thumbnail}
                alt={`Short ${video.id}`}
                loading={idx < 8 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
