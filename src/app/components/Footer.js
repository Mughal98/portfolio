"use client";

import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8">
        <a
          href="https://www.instagram.com/design.x_x/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#ff5a0d] hover:bg-[#ff820d] rounded-full flex items-center justify-center transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/923191519691"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#ff5a0d] hover:bg-[#ff820d] rounded-full flex items-center justify-center transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="mailto:designxmails@gmail.com"
          className="w-12 h-12 bg-[#ff5a0d] hover:bg-[#ff820d] rounded-full flex items-center justify-center transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
      <p className="text-center text-white/50 mt-6 text-sm">
        Design X - Creative Design & Video Editing.
      </p>
    </footer>
  );
}
