"use client";

import React from "react";
import { Play } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { SHORTS_DATA } from "@/data/portfolio";
import { useModal } from "@/app/providers/ModalProvider";
import Link from "next/link";

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
        <h1 className="text-5xl font-bold mb-3">{shortsConfig.title}</h1>
        <p className="text-white/60 text-lg mb-12">
          {shortsConfig.description}
        </p>

        <div className="flex gap-4 mb-12">
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
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SHORTS_DATA.map((video, idx) => (
            <div
              key={video.id}
              onClick={() =>
                openModal({ type: "video", items: SHORTS_DATA }, idx)
              }
              className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={video.thumbnail}
                alt={`Short ${video.id}`}
                loading={idx < 8 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
