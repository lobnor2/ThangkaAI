import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import TailwindIndicator from "@/components/tailwind-indicator";

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
  title: "ThankaAI",
  description:
    "An AI-powered platform that transforms text prompts into stunning visual art, inspired by the intricate beauty of traditional Thangka paintings and modern creativity. Unleash your imagination and create unique images effortlessly!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Favicon links */}
        <link rel="icon" href="/public/favicon.svg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh md:min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}
