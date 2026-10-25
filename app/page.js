"use client";
import { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import TopBar from "@/components/TopBar";
import HistoryStrip from "@/components/HistoryStrip";
import ControlPanel from "@/components/ControlPanel";
import ResultRow from "@/components/ResultRow";
import Skeleton from "@/components/Skeleton";
import EmptyState from "@/components/EmptyState";
import ErrorState from "@/components/ErrorState";
import { useHistory } from "@/hooks/useHistory";
import { useGenerate } from "@/hooks/useGenerate";
import { initialGeneration } from "@/data/mock";
const Lightbox = dynamic(() => import("@/components/Lightbox"), { ssr: false });
export default function Home() {
  const history = useHistory(); const { loading, error, generations, run } = useGenerate();
  const [prompt, setPrompt] = useState(""); const [type, setType] = useState("image"); const [count, setCount] = useState("4"); const [aspect, setAspect] = useState("1:1"); const [model, setModel] = useState("Model: Name"); const [styles, setStyles] = useState([]); const [preview, setPreview] = useState("");
  const inputRef = useRef(null); const [retryPayload, setRetryPayload] = useState(null);
  const submit = useCallback(() => { if (!prompt.trim()) { inputRef.current?.focus(); return; } const payload = { prompt: prompt.trim(), type, count, model, aspect, styles }; setRetryPayload(payload); run(payload); }, [prompt, type, count, model, aspect, styles, run]);
  const selectHistory = useCallback(item => { setPrompt(item.prompt); setType(item.type); }, []);
  const rows = [...generations, initialGeneration];
  return <main className="app-shell" id="home"><TopBar loading={loading}/><HistoryStrip items={history} onSelect={selectHistory}/><div className="workspace"><ControlPanel {...{ type, setType, prompt, setPrompt, submit, inputRef, error: "", loading, count, setCount, aspect, setAspect, model, setModel, styles, setStyles }}/><section className="results" aria-label="Generated results" aria-live="polite">{loading && <Skeleton/>}{error && <ErrorState onRetry={() => retryPayload && run(retryPayload)}/ >}{rows.map(row => <ResultRow key={row.id} generation={row} onPreview={setPreview}/>)}{!rows.length && !loading && <EmptyState/>}</section></div>{preview && <Lightbox src={preview} onClose={() => setPreview("")}/>}</main>;
}
