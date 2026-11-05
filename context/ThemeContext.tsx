"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type ThemeState = "light" | "dark";

export interface ThemeColors {
  background: string;
  card: string;
  surface: string;
  foreground: string;
  muted: string;
  border: string;
  ring: string;
  
  // 8 Accent Colors
  accent1: string; // Cyan
  accent2: string; // Blue
  accent3: string; // Indigo
  accent4: string; // Purple
  accent5: string; // Pink
  accent6: string; // Rose
  accent7: string; // Orange
  accent8: string; // Teal
}

const lightTheme: ThemeColors = {
  background: "#f8fafc", // slate-50
  card: "#ffffff", // white
  surface: "#f1f5f9", // slate-100
  foreground: "#0f172a", // slate-900
  muted: "#64748b", // slate-500
  border: "#e2e8f0", // slate-200
  ring: "#94a3b8", // slate-400
  
  accent1: "#06b6d4", // cyan-500
  accent2: "#3b82f6", // blue-500
  accent3: "#6366f1", // indigo-500
  accent4: "#a855f7", // purple-500
  accent5: "#ec4899", // pink-500
  accent6: "#f43f5e", // rose-500
  accent7: "#f97316", // orange-500
  accent8: "#14b8a6", // teal-500
};

const darkTheme: ThemeColors = {
  background: "#020617", // slate-950
  card: "#0f172a", // slate-900
  surface: "#1e293b", // slate-800
  foreground: "#f8fafc", // slate-50
  muted: "#94a3b8", // slate-400
  border: "#334155", // slate-700
  ring: "#475569", // slate-600
  
  accent1: "#22d3ee", // cyan-400
  accent2: "#60a5fa", // blue-400
  accent3: "#818cf8", // indigo-400
  accent4: "#c084fc", // purple-400
  accent5: "#f472b6", // pink-400
  accent6: "#fb7185", // rose-400
  accent7: "#fb923c", // orange-400
  accent8: "#2dd4bf", // teal-400
};

interface ThemeContextType {
  theme: ThemeState;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeState>("dark");

  useEffect(() => {
    // Check local storage or system preference
    const stored = localStorage.getItem("theme") as ThemeState | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const colors = theme === "dark" ? darkTheme : lightTheme;

  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: "light", colors: lightTheme, toggleTheme: () => {} }}>
        <SessionProvider>
          <div style={{ visibility: "hidden", display: "none" }}>{children}</div>
        </SessionProvider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
