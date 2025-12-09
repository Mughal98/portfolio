import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ModalProvider } from "./providers/ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creative Portfolio | Video & Design Studio",
  description: "Professional video editing and design portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
