"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isEditActive = pathname.startsWith("/edit");
  const isDesignsActive = pathname.startsWith("/designs");

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="cursor-pointer group">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="h-10 w-auto transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-105"
            priority
          />
        </Link>

        <div className="flex gap-8">
          <Link href="/edit/shorts">
            <button
              className={`text-lg font-medium transition-colors cursor-pointer ${
                isEditActive
                  ? "text-[#ff5a0d]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Edit
            </button>
          </Link>
          <Link href="/designs/illustrations">
            <button
              className={`text-lg font-medium transition-colors cursor-pointer ${
                isDesignsActive
                  ? "text-[#ff5a0d]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Designs
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
