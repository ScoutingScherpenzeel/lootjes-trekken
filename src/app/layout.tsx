import type { Metadata } from "next";
import "./globals.css";
import Snowfall from "@/components/Snowfall";
import SiteFooter from "@/components/SiteFooter";

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
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
