"use client";
import { useState } from "react";
import { generate } from "@/lib/api";
export function useGenerate() { const [loading, setLoading] = useState(false); const [error, setError] = useState(""); const [generations, setGenerations] = useState([]); async function run(payload) { setLoading(true); setError(""); try { const result = await generate(payload); setGenerations(rows => [result, ...rows]); } catch (e) { setError(e.message); } finally { setLoading(false); } } return { loading, error, generations, run, clearError: () => setError("") }; }
