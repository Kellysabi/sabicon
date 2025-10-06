import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sign In to SabiCon",
    template: "%s | SabiCon Auth", // Allows dynamic page titles like "Sign Up | SabiCon Auth"
  },
  description: "Join SabiCon to share and discover innovative ideas. Sign in or create an account to connect with a community of thinkers.",
  keywords: ["social platform", "idea sharing", "community", "innovation", "SabiCon"], // Helps with keyword relevance
  robots: {
    index: false, // Prevent indexing for auth pages (change to true if needed)
    follow: false,
  },
  icons: {
    icon: "/favicon.ico", // Add your favicon path
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Sign In to SabiCon",
    description: "A social platform to share and discover ideas. Join now!",
    url: "https://sabicon.vercel.app/sign-in", // Replace with your site's auth URL
    siteName: "SabiCon",
    images: [
      {
        url: "https://sabicon.vercel.app/logo.svg", // Replace with a relevant OG image (e.g., 1200x630px)
        width: 1200,
        height: 630,
        alt: "SabiCon Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign In to SabiCon",
    description: "Share and discover ideas on SabiCon. Join the community today!",
    images: ["https://x.com/SabiDev999/photo"], // Replace with a Twitter-optimized image (e.g., 1200x675px)
    creator: "https://x.com/SabiDev999", // Optional: Your Twitter handle
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}