import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Fraunces } from "next/font/google";

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Maryam Ahmed — Portfolio",
  description: "Personal portfolio + AI assistant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body id="top" className={`${body.variable} ${display.variable}`}>
        {children}
      </body>
    </html>
  );
}