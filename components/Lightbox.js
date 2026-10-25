"use client";
import { useEffect } from "react";
import Image from "next/image";
export default function Lightbox({ src, onClose }) { useEffect(() => { function key(e) { if (e.key === "Escape") onClose(); } window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key); }, [onClose]); return <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={onClose}><button type="button" aria-label="Close preview" onClick={onClose}>×</button><Image src={src} alt="Expanded generated image" width={1200} height={1200} onClick={e => e.stopPropagation()}/></div>; }
