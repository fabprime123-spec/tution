"use client";

import { useThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme, colors } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px",
        borderRadius: "50%",
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        color: colors.foreground,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.2s ease"
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun style={{ height: "20px", width: "20px", color: colors.accent7 }} />
      ) : (
        <Moon style={{ height: "20px", width: "20px", color: colors.accent3 }} />
      )}
    </button>
  );
}
