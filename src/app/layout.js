"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import SessionTimeout from "../components/SessionTimeout";
import "./globals.css";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideNavbar =
    pathname === "/registration" ||
    pathname === "/VerifyEmail";

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SessionTimeout />
        {!hideNavbar && <Navbar />}

        {children}

        </CartProvider>

        <Footer />
      </body>
    </html>
  );
}