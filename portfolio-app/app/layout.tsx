import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import Announcement from "./components/Announcement/Annoucement";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marika Sadowska Portfolio",
  description: "Welcome to my developer portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <BubbleBackground className="fixed inset-0 min-h-screen" interactive={true} >
          <div className="relative w-full h-full overflow-x-hidden bg-transparent">
            <Announcement />
            <Navbar />
            <div className="container">
              {children}
            </div>
            <Contact />
            <Footer />
          </div>
        </BubbleBackground>
      </body>
    </html >
  );
}
