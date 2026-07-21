"use client";
import { useEffect, forwardRef, useRef, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface BlenderSceneProps {
  onLoad?: () => void;
  onProgress?: (progress: number) => void;
}

const BlenderScene = forwardRef<any, BlenderSceneProps>(({ onLoad, onProgress }, ref) => {
  const modelViewerRef = useRef<any>(null);
  const onLoadRef = useRef(onLoad);
  const onProgressRef = useRef(onProgress);

  const [isRendered, setIsRendered] = useState(false);

  const ModelViewer = "model-viewer" as any;

  useImperativeHandle(ref, () => modelViewerRef.current);

  useEffect(() => {
    onLoadRef.current = onLoad;
    onProgressRef.current = onProgress;
  }, [onLoad, onProgress]);

  useEffect(() => {
    // Eager trigger model-viewer package import as soon as client mounts
    if (typeof window !== "undefined") {
      import("@google/model-viewer");
    }
  }, []);

  useEffect(() => {
    const el = modelViewerRef.current;
    if (!el) return;

    const handleProgress = (event: any) => {
      const totalProgress = event?.detail?.totalProgress ?? 0;
      onProgressRef.current?.(Math.round(totalProgress * 100));
    };

    const handleLoad = () => {
      onProgressRef.current?.(100);
      // 1.5s buffer for GPU shader compilation & WebGL initial frame render
      setTimeout(() => {
        setIsRendered(true);
        onLoadRef.current?.();
      }, 1500);
    };

    const handleError = () => {
      onProgressRef.current?.(100);
      setIsRendered(true);
      onLoadRef.current?.();
    };

    el.addEventListener("progress", handleProgress);
    el.addEventListener("load", handleLoad);
    el.addEventListener("error", handleError);

    if (el.loaded) {
      handleLoad();
    }

    return () => {
      el.removeEventListener("progress", handleProgress);
      el.removeEventListener("load", handleLoad);
      el.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* ========================================================= */}
      {/* 3D SHADOW / SKELETON LOADER PLACEHOLDER */}
      {/* ========================================================= */}
      <AnimatePresence>
        {!isRendered && (
          <motion.div
            key="3d-skeleton-loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none overflow-hidden"
          >
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-radial from-[#d6b06f]/10 via-[#3f9c9c]/5 to-transparent blur-2xl animate-pulse" />

            {/* Glowing 3D Silhouette Skeleton Container */}
            <div className="relative flex flex-col items-center justify-center">
              {/* Silhouette Pulsing Rings */}
              <div className="relative flex h-64 w-64 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#d6b06f]/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-t-[#3f9c9c]/40 border-b-transparent border-l-transparent border-r-transparent animate-[spin_6s_linear_infinite_reverse]" />
                <div className="absolute inset-10 rounded-full border border-dashed border-[#d6b06f]/30 animate-pulse" />

                {/* Central Shadow Mesh Avatar Icon */}
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-[#d6b06f]/20 bg-[#050706]/60 backdrop-blur-md shadow-[0_0_30px_rgba(214,176,111,0.1)]">
                  <svg
                    className="h-12 w-12 text-[#d6b06f] animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.2}
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-4 flex items-center gap-2 rounded-full border border-[#d6b06f]/20 bg-[#050706]/80 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 animate-ping rounded-full bg-[#3f9c9c]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d6b06f]/80 font-mono">
                  Loading 3D Canvas
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* MODEL VIEWER CANVAS */}
      {/* ========================================================= */}
      <ModelViewer
        ref={modelViewerRef}
        src="/models/goodLookingVinnie.glb"
        loading="eager"
        reveal="auto"
        autoplay
        interaction-prompt="none"
        shadow-intensity="1"
        camera-orbit="-32deg 85deg 7.2m"
        camera-target="-0.7m 1.22m 0m"
        field-of-view="19deg"
        interpolation-decay="100"
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      />
    </div>
  );
});

BlenderScene.displayName = "BlenderScene";

export default BlenderScene;