"use client";

import React from "react";
import { Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Testimonials from "./components/Testimonials";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { SHORTS_DATA, TESTIMONIALS_DATA } from "@/data/portfolio";
import { useModal } from "./providers/ModalProvider";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  ANIMATION_CONFIG,
} from "@/config/animations";

export default function HomePage() {
  const { openModal } = useModal();
  const reels = SHORTS_DATA.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <motion.div
          className="absolute bottom-20 left-0 right-0 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_CONFIG.hero.duration,
            delay: ANIMATION_CONFIG.hero.delay,
          }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Creative Portfolio
          </h1>
          <p className="text-lg md:text-2xl text-white/80">
            Bringing Stories to Life
          </p>
        </motion.div>
      </section>

      {/* Reels Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          {...fadeInUp}
        >
          Latest Work
        </motion.h2>

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="flex md:grid md:grid-cols-6 gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
            {reels.map((reel, idx) => (
              <motion.div
                key={reel.id}
                variants={fadeInUp}
                onClick={() =>
                  openModal({ type: "video", items: SHORTS_DATA }, idx)
                }
                className="relative flex-shrink-0 w-32 md:w-auto aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group snap-start"
                whileHover={{ scale: ANIMATION_CONFIG.hover.scale }}
                whileTap={{ scale: ANIMATION_CONFIG.tap.scale }}
                transition={{ duration: ANIMATION_CONFIG.hover.duration }}
              >
                <img
                  src={reel.thumbnail}
                  alt={`Reel ${reel.id}`}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-10 md:w-12 h-10 md:h-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="text-center mt-8 md:mt-12" {...scaleIn}>
          <Link href="/edit/shorts">
            <motion.button
              className="px-6 md:px-8 py-3 md:py-4 bg-[#ff5a0d] hover:bg-[#ff6a1d] rounded-full text-base md:text-lg font-semibold transition-colors"
              whileHover={{ scale: ANIMATION_CONFIG.hover.scale }}
              whileTap={{ scale: ANIMATION_CONFIG.tap.scale }}
              transition={{ duration: ANIMATION_CONFIG.hover.duration }}
            >
              Show More
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <motion.section
        className="py-16 md:py-20 px-4 md:px-6 bg-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: ANIMATION_CONFIG.fadeIn.duration }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
            {...fadeInUp}
          >
            Client Testimonials
          </motion.h2>
          <Testimonials testimonials={TESTIMONIALS_DATA} />
        </div>
      </motion.section>
    </div>
  );
}
