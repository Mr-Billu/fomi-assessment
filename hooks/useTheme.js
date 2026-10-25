"use client";
import { useEffect, useState } from "react";
export function useTheme() { const [dark, setDark] = useState(false); useEffect(() => { const saved = localStorage.getItem("fomi-theme"); setDark(saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches); }, []); useEffect(() => { document.documentElement.classList.toggle("dark", dark); localStorage.setItem("fomi-theme", dark ? "dark" : "light"); }, [dark]); return [dark, () => setDark(value => !value)]; }
