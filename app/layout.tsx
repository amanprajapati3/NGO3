import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./component/section/Header/Header";
import Footer from "./component/section/Footer/Footer";
import data from "@/data/data.json";
import SmoothScroll from "./component/shared/SmoothScroll";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: data.meta?.siteTitle ?? "Helping Hearts",
  description:
    data.meta?.siteDescription ??
    "Helping Hearts organization dedicated to helping those in need and building brighter futures.",
  keywords: data.meta?.keywords ?? [
    "charity NGO",
    "nonprofit organization",
    "community support",
    "donation website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">   
        <Header />
        <main className="relative ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}