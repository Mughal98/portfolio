"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isEditActive = pathname.startsWith("/edit");
  const isDesignsActive = pathname.startsWith("/designs");
  const isLogoActive = pathname.startsWith("/logo");

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
        ${open ? "bg-transparent" : "bg-black/70 backdrop-blur-md border-b border-white/10"}`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex gap-8">
            <NavItem href="/edit/shorts" active={isEditActive}>
              Edit
            </NavItem>
            <NavItem href="/designs/illustrations" active={isDesignsActive}>
              Designs
            </NavItem>
            <NavItem href="/logo" active={isLogoActive}>
              Logo
            </NavItem>
          </div>

          {/* Hamburger / Cross */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center overflow-visible"
          >
            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-300
              ${open ? "rotate-45" : "-translate-y-2"}`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-300
              ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-300
              ${open ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </div>
      </nav>

      {/* OVERLAY (below navbar) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-xl transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* SLIDING MENU */}
      <div
        className={`fixed top-0 right-0 z-45 h-full flex items-center
        transition-transform duration-500 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="pr-12 flex flex-col gap-8 text-right">
          <MobileItem
            href="/edit/shorts"
            active={isEditActive}
            onClick={setOpen}
          >
            Edit
          </MobileItem>
          <MobileItem
            href="/designs/illustrations"
            active={isDesignsActive}
            onClick={setOpen}
          >
            Designs
          </MobileItem>
          <MobileItem href="/logo" active={isLogoActive} onClick={setOpen}>
            Logo
          </MobileItem>
        </div>
      </div>
    </>
  );
}

/* Components */

function NavItem({ href, active, children }) {
  return (
    <Link href={href}>
      <span
        className={`text-lg font-medium transition-colors cursor-pointer ${
          active ? "text-[#ff5a0d]" : "text-white/70 hover:text-white"
        }`}
      >
        {children}
      </span>
    </Link>
  );
}

function MobileItem({ href, active, children, onClick }) {
  return (
    <Link href={href} onClick={() => onClick(false)}>
      <span
        className={`text-3xl font-semibold transition-colors ${
          active ? "text-[#ff5a0d]" : "text-white/85 hover:text-white"
        }`}
      >
        {children}
      </span>
    </Link>
  );
}

