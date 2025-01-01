import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AnimatePresence } from "motion/react";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Doubloons Explained!",
  description:
    "An interactive lesson on Doubloons and how they can be earned in hackclub high seas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        defaultTheme="system"
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AnimatePresence>{children}</AnimatePresence>
        </body>
      </ThemeProvider>
    </html>
  );
}
