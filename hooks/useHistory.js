"use client";
import { useEffect, useState } from "react";
import { fetchHistory } from "@/lib/api";
export function useHistory() { const [items, setItems] = useState([]); useEffect(() => { fetchHistory().then(setItems).catch(() => {}); }, []); return items; }
