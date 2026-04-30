import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lowell Edwards Home Integration, Inc. — Smart Access & Building Integration",
  description: "Certified home integration specialists in Hackensack, NJ. ButterflyMX, Akuvox, DoorBird authorised integrators. Smart video intercoms, access control, and building integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="estate" className={`${cormorantGaramond.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
