"use client";
import { useState } from "react";
export default function Accordion({ title, children }) { const [open, setOpen] = useState(false); const id = `accordion-${title.toLowerCase()}`; return <section className="accordion"><button className="accordion-trigger" aria-expanded={open} aria-controls={id} onClick={() => setOpen(v => !v)}>{title}<span className={`chevron ${open ? "open" : ""}`}>⌄</span></button>{open && <div className="accordion-body" id={id}>{children}</div>}</section>; }
