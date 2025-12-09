"use client";

import React from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { THUMBNAILS_DATA } from "@/data/portfolio";
import { useModal } from "@/app/providers/ModalProvider";
import Link from "next/link";

export default function ThumbnailsPage() {
  const { openModal } = useModal();
  const { thumbnails: thumbnailsConfig } = PORTFOLIO_CONFIG.designsPage;

  if (!thumbnailsConfig.enabled) {
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
        <h1 className="text-5xl font-bold mb-3">{thumbnailsConfig.title}</h1>
        <p className="text-white/60 text-lg mb-12">
          {thumbnailsConfig.description}
        </p>

        <div className="flex gap-4 mb-12">
          {PORTFOLIO_CONFIG.designsPage.designs.enabled && (
            <Link href="/designs/illustrations">
              <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-white/10 text-white/70 hover:bg-white/20">
                Designs
              </button>
            </Link>
          )}
          <Link href="/designs/thumbnails">
            <button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-[#ff5a0d] text-white">
              Thumbnails
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {THUMBNAILS_DATA.map((item, idx) => (
            <div
              key={item.id}
              onClick={() =>
                openModal({ type: "image", items: THUMBNAILS_DATA }, idx)
              }
              className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={item.url}
                alt={`Thumbnail ${item.id}`}
                loading={idx < 4 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
