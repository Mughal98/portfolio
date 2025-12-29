"use client";

import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { LONG_DATA } from "@/data/portfolio";
import { useModal } from "@/app/providers/ModalProvider";
import Link from "next/link";
import {
  fadeInLeft,
  staggerContainer,
  gridItem,
  ANIMATION_CONFIG,
} from "@/config/animations";

export default function LongPage() {
  const { openModal } = useModal();
  const { longForm: longFormConfig } = PORTFOLIO_CONFIG.editPage;

  if (!longFormConfig.enabled) {
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
          {longFormConfig.title}
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
          {longFormConfig.description}
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
          {PORTFOLIO_CONFIG.editPage.shorts.enabled && (
            <Link href="/edit/shorts">
              <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-white/10 text-white/70 hover:bg-white/20">
                Shorts
              </button>
            </Link>
          )}
          <Link href="/edit/long">
            <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-[#ff5a0d] text-white">
              Long Form
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {LONG_DATA.map((video, idx) => (
            <motion.div
              key={video.id}
              variants={gridItem}
              onClick={() =>
                openModal({ type: "video", items: LONG_DATA }, idx)
              }
              className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: ANIMATION_CONFIG.hover.scale }}
              whileTap={{ scale: ANIMATION_CONFIG.tap.scale }}
              transition={{ duration: ANIMATION_CONFIG.hover.duration }}
            >
              <img
                src={video.thumbnail}
                alt={`Video ${video.id}`}
                loading={idx < 4 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
