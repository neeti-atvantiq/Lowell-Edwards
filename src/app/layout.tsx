import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/index.css";
import RecaptchaProvider from "@/components/providers/RecaptchaProvider";

const futurist = localFont({
  src: "../assets/fonts/FUTRST.ttf",
  variable: "--font-futurist",
  display: "swap",
});

const basset = localFont({
  src: "../assets/fonts/BASSET.ttf",
  variable: "--font-basset",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lowell Edwards — Video Intercom & Access Control Installation in NJ & NY",
  description: "Certified ButterflyMX, Akuvox, and DoorBird integrator in Hackensack, NJ. We design, install, and support video intercoms and access control for apartments, offices, and gated communities across the NY metro area. Free quotes, 24-hour response.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="estate" className={`${futurist.variable} ${basset.variable}`}>
      <body>
        <RecaptchaProvider>{children}</RecaptchaProvider>
      </body>
    </html>
  );
}
