import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" data-theme="estate">
      <body>{children}</body>
    </html>
  );
}
