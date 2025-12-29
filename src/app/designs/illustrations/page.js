"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { DESIGNS_DATA } from "@/data/portfolio";
import { useModal } from "@/app/providers/ModalProvider";
import Link from "next/link";
import {
  fadeInLeft,
  staggerContainer,
  gridItem,
  ANIMATION_CONFIG,
} from "@/config/animations";

export default function IllustrationsPage() {
  const { openModal } = useModal();
  const { designs: designsConfig } = PORTFOLIO_CONFIG.designsPage;

  if (!designsConfig.enabled) {
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
          {designsConfig.title}
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
          {designsConfig.description}
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
          <Link href="/designs/illustrations">
            <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-[#ff5a0d] text-white">
              Designs
            </button>
          </Link>
          {PORTFOLIO_CONFIG.designsPage.thumbnails.enabled && (
            <Link href="/designs/thumbnails">
              <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-white/10 text-white/70 hover:bg-white/20">
                Thumbnails
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
          {DESIGNS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={gridItem}
              onClick={() =>
                openModal({ type: "image", items: DESIGNS_DATA }, idx)
              }
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: ANIMATION_CONFIG.hover.scale }}
              whileTap={{ scale: ANIMATION_CONFIG.tap.scale }}
              transition={{ duration: ANIMATION_CONFIG.hover.duration }}
            >
              <img
                src={item.url}
                alt={`Design ${item.id}`}
                loading={idx < 8 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
