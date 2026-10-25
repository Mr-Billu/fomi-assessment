"use client";
import ResultCard from "@/components/ResultCard";
export default function ResultRow({ generation, onPreview }) { return <article className="generation"><div className="prompt-bubble">{generation.prompt}<span className="model-chip">{generation.model}</span></div><div className="image-grid">{generation.images.map((src, index) => <ResultCard key={`${generation.id}-${index}`} {...{ src, index, type: generation.type, onPreview }}/>)}</div></article>; }
