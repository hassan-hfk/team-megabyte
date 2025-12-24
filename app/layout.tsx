import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Megabyte - Pakistan's RoboWar Combat Team",
  description: "Pakistan's elite RoboWar combat robotics team – expert engineers, fearless builders, and fierce competitors. Our bots are the toughest and most innovative on the field.",
  keywords: ["robotics", "combat robots", "Team Megabyte", "Pakistan", "RoboWar"],
  openGraph: {
    title: "Team Megabyte - Pakistan's RoboWar Combat Team",
    description: "Forged in battle, driven by passion, united as Team Megabyte.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
