import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
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

const libreBaskerville = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lifeinuptime.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        url: "https://lifeinuptime.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Life in Uptime: Real stories from the people who keep the internet running.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life in Uptime",
    description: "Real stories from the people who keep the internet running.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
