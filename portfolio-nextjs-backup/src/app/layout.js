import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "Sai Akhil Kogilathota - Portfolio",
  description: "Personal portfolio website showcasing my work and experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={inter.className}>
        <ParticlesBackground />
        <Navbar />
        <main>{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
} 