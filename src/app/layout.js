"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideNavbar =
    pathname === "/registration" ||
    pathname === "/VerifyEmail";

  return (
    <html lang="en">
      <body>
        {!hideNavbar && <Navbar />}

        {children}

        <Footer />
      </body>
    </html>
  );
}