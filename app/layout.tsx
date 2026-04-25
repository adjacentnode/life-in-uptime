import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Life in Uptime",
  description:
    "A podcast exploring the real journeys of the people who build and run the backbone of the internet. Hosted by Alexis Bertholf and Kevin Nanns. Part of the Packet Pushers network.",
  openGraph: {
    title: "Life in Uptime",
    description:
      "Real stories from the people who keep the internet running. Biweekly on Packet Pushers.",
    url: "https://lifeinuptime.com",
    siteName: "Life in Uptime",
    images: [
      {
        url: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/f4/44/87/f44487a9-561e-3473-ba40-43ebaa2b975e/mza_11280545770999497642.jpg/600x600bb.jpg",
        width: 600,
        height: 600,
        alt: "Life in Uptime podcast cover art",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life in Uptime",
    description: "Real stories from the people who keep the internet running.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
