import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: {
    default: "Endurance Travel Adventures | ETA",
    template: "%s | ETA",
  },
  description: "Adventure, coaching, and unforgettable endurance travel experiences. Explore upcoming, past, and custom adventures with ETA.",
  keywords: [
    "Endurance travel", "Adventure travel", "Coaching", "Custom travel", "Travel support", "Upcoming adventures", "Past adventures", "ETA"
  ],
  openGraph: {
    title: "Endurance Travel Adventures (ETA)",
    description: "Adventure, coaching, and unforgettable endurance travel experiences.",
    url: "https://etatravel.com", // Update to actual domain on deploy
    siteName: "Endurance Travel Adventures",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen flex flex-col`}
      >
        {/* Semantic, accessible nav always at the top */}
        <NavBar />
        {/* Add offset so content isn't under nav */}
        <main className="flex-1 pt-20">{children}</main>
        <footer className="bg-gray-50 border-t border-gray-100 py-4 px-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Endurance Travel Adventures (ETA). All rights reserved.
        </footer>
      </body>
    </html>
  );
}
