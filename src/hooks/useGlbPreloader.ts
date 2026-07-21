"use client";

import { useEffect, useState } from "react";

export const useGlbPreloader = (url: string) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!url) {
      setProgress(100);
      setIsLoaded(true);
      return;
    }

    let isMounted = true;
    const controller = new AbortController();

    async function preload() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);

        const contentLength = response.headers.get("content-length");
        // Default size of goodLookingVinnie.glb is ~8.6MB (8631500 bytes)
        const totalBytes = contentLength ? parseInt(contentLength, 10) : 8631500;
        let loadedBytes = 0;

        if (response.body) {
          const reader = response.body.getReader();
          while (isMounted) {
            const { done, value } = await reader.read();
            if (done) break;
            loadedBytes += value.length;
            const pct = Math.min(99, Math.round((loadedBytes / totalBytes) * 100));
            if (isMounted) setProgress(pct);
          }
        }

        if (isMounted) {
          setProgress(100);
          setIsLoaded(true);
        }
      } catch (err) {
        if (isMounted) {
          // In case of error (e.g. CORS/network), resolve to prevent lockup
          setProgress(100);
          setIsLoaded(true);
        }
      }
    }

    preload();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url]);

  return { progress, isLoaded };
};

export default useGlbPreloader;
