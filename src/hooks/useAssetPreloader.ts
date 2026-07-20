"use client";

import { useEffect, useState } from "react";

const useAssetPreloader = (assets: string[]) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // No assets to load
    if (assets.length === 0) {
      setProgress(100);
      setIsLoaded(true);
      return;
    }

    let loadedCount = 0;
    let isMounted = true;

    const handleAssetComplete = () => {
      loadedCount++;

      const newProgress = Math.round(
        (loadedCount / assets.length) * 100
      );

      if (isMounted) {
        setProgress(newProgress);
      }

      // Everything has finished loading
      if (loadedCount === assets.length && isMounted) {
        setProgress(100);
        setIsLoaded(true);
      }
    };

    assets.forEach((src) => {
      const image = new Image();

      image.onload = handleAssetComplete;

      // We still count errors as complete so that
      // one broken image doesn't trap the user
      // on the loading screen forever.
      image.onerror = handleAssetComplete;

      image.src = src;
    });

    return () => {
      isMounted = false;
    };
  }, [assets]);

  return {
    progress,
    isLoaded,
  };
};

export default useAssetPreloader;