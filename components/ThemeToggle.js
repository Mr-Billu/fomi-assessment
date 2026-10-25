"use client";
import { useTheme } from "@/hooks/useTheme";
export default function ThemeToggle() { const [dark, toggle] = useTheme(); return <button type="button" className="theme-button" onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>{dark ? "☼" : "☾"}</button>; }
