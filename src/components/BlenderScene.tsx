"use client";
import { useEffect, forwardRef } from "react";

const BlenderScene = forwardRef<any>((props, ref) => {
  const ModelViewer = "model-viewer" as any;

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <ModelViewer
      ref={ref}
      src="/models/goodLookingVinnie.glb"
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