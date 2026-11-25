"use client";

import Script from "next/script";
import { useState } from "react";

export default function GeexScripts({ sources }: { sources: string[] }) {
  const [loadedCount, setLoadedCount] = useState(0);
  const source = sources[loadedCount];
  if (!source) return null;

  const advance = () => setLoadedCount(current => Math.max(current, loadedCount + 1));
  return <Script key={source} src={source} strategy="afterInteractive" onReady={advance} onError={advance} />;
}
