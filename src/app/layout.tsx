import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jetwashteam.com"),
  title: {
    default: "The Jet Wash Team | Professional Exterior Cleaning Services",
    template: "%s | The Jet Wash Team",
  },
  description:
    "The Jet Wash Team delivers premium pressure washing, soft washing, roof, driveway, patio and gutter cleaning for homes and businesses nationwide. Fully insured, 5-star rated. Get a free quote today.",
  keywords: [
    "pressure washing",
    "soft washing",
    "roof cleaning",
    "driveway cleaning",
    "exterior cleaning services",
    "The Jet Wash Team",
  ],
  openGraph: {
    title: "The Jet Wash Team | Professional Exterior Cleaning Services",
    description:
      "Residential & commercial exterior cleaning experts. Fully insured, eco-friendly, 5-star rated.",
    url: "https://www.jetwashteam.com",
    siteName: "The Jet Wash Team",
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
