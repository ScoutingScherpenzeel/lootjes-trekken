import type { Metadata } from "next";
import "./globals.css";
import Snowfall from "@/components/Snowfall";

export const metadata: Metadata = {
  title: "Lootjes trekken",
  description: "Lootjes trekken, zonder poespas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white relative`}
      >
        <Snowfall style={{ zIndex: 50 }} />
        {children}
      </body>
    </html>
  );
}
