"use client";

import React from "react";
import { Play } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { LONG_DATA } from "@/data/portfolio";
import { useModal } from "@/app/providers/ModalProvider";
import Link from "next/link";

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
        <h1 className="text-5xl font-bold mb-3">{longFormConfig.title}</h1>
        <p className="text-white/60 text-lg mb-12">
          {longFormConfig.description}
        </p>

        <div className="flex gap-4 mb-12">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LONG_DATA.map((video, idx) => (
            <div
              key={video.id}
              onClick={() =>
                openModal({ type: "video", items: LONG_DATA }, idx)
              }
              className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={video.thumbnail}
                alt={`Video ${video.id}`}
                loading={idx < 4 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
