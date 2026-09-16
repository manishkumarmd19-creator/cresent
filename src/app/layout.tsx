import type { Metadata } from "next";
import { Lobster, Montserrat } from "next/font/google";
import "./globals.css";

const lobster = Lobster({
  variable: "--font-lobster",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE CRESCENT - Fine Dining Restaurant",
  description:
    "THE CRESCENT offers an unforgettable fine dining experience. Exquisite cuisine, elegant ambiance, and impeccable service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lobster.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}