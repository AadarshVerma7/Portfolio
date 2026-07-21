"use client";
import { useEffect, forwardRef, useRef, useImperativeHandle } from "react";

export interface BlenderSceneProps {
  onLoad?: () => void;
  onProgress?: (progress: number) => void;
}

const BlenderScene = forwardRef<any, BlenderSceneProps>(({ onLoad, onProgress }, ref) => {
  const modelViewerRef = useRef<any>(null);
  const onLoadRef = useRef(onLoad);
  const onProgressRef = useRef(onProgress);

  const ModelViewer = "model-viewer" as any;

  useImperativeHandle(ref, () => modelViewerRef.current);

  useEffect(() => {
    onLoadRef.current = onLoad;
    onProgressRef.current = onProgress;
  }, [onLoad, onProgress]);

  useEffect(() => {
    import("@google/model-viewer");
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
      // Allow 1.5s for GPU shader compilation and initial frame WebGL render
      setTimeout(() => {
        onLoadRef.current?.();
      }, 1500);
    };

    const handleError = () => {
      onProgressRef.current?.(100);
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
  );
});

BlenderScene.displayName = "BlenderScene";

export default BlenderScene;