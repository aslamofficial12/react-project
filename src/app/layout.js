import Navbar from "../components/Navbar";
// import Footer from "@/components/Footer";
import Footer from "../components/Footer/Footer"
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}