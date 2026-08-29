"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { COLOR_GRADE_DATA } from "@/data/portfolio";
import Link from "next/link";
import { fadeInLeft, ANIMATION_CONFIG } from "@/config/animations";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider";

export default function ColorGradePage() {
  const { colorGrade: colorGradeConfig } = PORTFOLIO_CONFIG.editPage;

  if (!colorGradeConfig.enabled) {
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
          {colorGradeConfig.title}
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
          {colorGradeConfig.description}
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
          {PORTFOLIO_CONFIG.editPage.shorts.enabled && (
            <Link href="/edits/shorts">
              <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-white/10 text-white/70 hover:bg-white/20">
                Shorts
              </button>
            </Link>
          )}
          {PORTFOLIO_CONFIG.editPage.longForm.enabled && (
            <Link href="/edits/long">
              <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-white/10 text-white/70 hover:bg-white/20">
                Long Form
              </button>
            </Link>
          )}
          <Link href="/edits/color">
            <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-[#ff5a0d] text-white">
              Color Grade
            </button>
          </Link>
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
          <div className="flex gap-2">
            {PORTFOLIO_CONFIG.editPage.shorts.enabled && (
              <Link href="/edits/shorts" className="flex-1">
                <button className="w-full px-3 py-2.5 rounded-full text-sm font-semibold transition-colors bg-white/10 text-white/70 hover:bg-white/20">
                  Shorts
                </button>
              </Link>
            )}
            {PORTFOLIO_CONFIG.editPage.longForm.enabled && (
              <Link href="/edits/long" className="flex-1">
                <button className="w-full px-3 py-2.5 rounded-full text-sm font-semibold transition-colors bg-white/10 text-white/70 hover:bg-white/20">
                  Long Form
                </button>
              </Link>
            )}
            <Link href="/edits/color" className="flex-1">
              <button className="w-full px-3 py-2.5 rounded-full text-sm font-semibold transition-colors bg-[#ff5a0d] text-white">
                Color Grade
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Before/After Slider */}
        <BeforeAfterSlider
          rawVideo={COLOR_GRADE_DATA.raw}
          gradedVideo={COLOR_GRADE_DATA.graded}
        />
      </div>
    </div>
  );
}
