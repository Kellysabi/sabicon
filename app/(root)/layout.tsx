import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SabiCon - Share and Discover Ideas",
    template: "%s | SabiCon", // Enables dynamic titles for child pages (e.g., "Profile | SabiCon")
  },
  description: "SabiCon is a social platform built with Next.js where users can share, discuss, and discover innovative ideas in a vibrant community.",
  keywords: ["SabiCon", "idea sharing", "social platform", "community discussions", "innovation network", "Next.js app"],
  robots: {
    index: true, // Allow indexing for main app pages
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // Replace with your favicon path
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "SabiCon - Share and Discover Ideas",
    description: "Join SabiCon to connect with thinkers, share your ideas, and explore new concepts in a dynamic community.",
    url: "https://your-site.com", // Replace with your site's base URL
    siteName: "SabiCon",
    images: [
      {
        url: "https://your-site.com/og-image.jpg", // Replace with a high-quality OG image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "SabiCon Platform Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SabiCon - Share and Discover Ideas",
    description: "A Next.js-powered platform for sharing and discovering ideas. Join the conversation!",
    images: ["https://your-site.com/twitter-image.jpg"], // Replace with a Twitter-optimized image (1200x675px)
    creator: "@yourtwitterhandle", // Optional: Your Twitter handle
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}