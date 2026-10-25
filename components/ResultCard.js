"use client";
import Image from "next/image";
export default function ResultCard({ src, index, type, onPreview }) { return <div className="card"><Image className="result-image" src={src} alt={`${type === "video" ? "Generated video preview" : "Generated image"} ${index + 1}`} width={600} height={630} onClick={() => onPreview(src)} priority={index < 4} sizes="(max-width: 639px) 46vw, (max-width: 1023px) 28vw, 18vw"/>{type === "video" && <button className="play" aria-label="Play video preview" onClick={e => e.currentTarget.previousElementSibling?.click()}>▶</button>}</div>; }
