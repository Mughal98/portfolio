// src/app/layout.js - CORRECT VERSION
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ModalProvider } from "./providers/ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creative Portfolio",
  description: "Video editing and design portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0a] text-white`}>
        <ModalProvider>
          <Navbar />
          {children} {/* Just children, no wrapper */}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
