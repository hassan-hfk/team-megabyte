import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";

// Display: industrial grotesque, used for the footer wordmark and brand marks.
const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Mono: technical readout face for the footer labels and small data.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
    <html
      lang="en"
      className={`${display.variable} ${mono.variable}`}
    >
      <body>
        <ParticlesBackground />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
