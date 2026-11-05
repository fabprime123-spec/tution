"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider, useThemeContext } from "../context/ThemeContext";
import ParticleBackground from "../components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { colors } = useThemeContext();

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.foreground,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <ParticleBackground />
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} suppressHydrationWarning>
      <head>
        <title>Wisdom Tution</title>
        <meta name="description" content="Empowering minds through specialized Science, Math, Coding, and foundational education." />
      </head>
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <ThemeProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
