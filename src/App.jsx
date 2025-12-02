import { useState, useEffect, useRef, Suspense } from "react";
import Experience from "./Components/Experience";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Vignette,
  DepthOfField,
  ToneMapping,
} from "@react-three/postprocessing";
import {
  BlurPass,
  Resizer,
  KernelSize,
  Resolution,
  BlendFunction,
  ToneMappingMode,
} from "postprocessing";
import { PerspectiveCamera } from "@react-three/drei";
import "./App.css";
import * as THREE from "three";

function App() {
  return (
    <>
      <Canvas
        camera={{ fov: 50 }}
        gl={{
          antialias: true,

          toneMappingExposure: 0.5,
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
        shadows
      >
        <Suspense fallback={null}>
          <Experience />
          <EffectComposer>
            <Bloom
              intensity={0.55}
              luminanceThreshold={0.78}
              luminanceSmoothing={0.15}
              mipmapBlur={true}
              radius={0.85}
            />
            <Vignette eskil={false} offset={0.2} darkness={0.7} />
            {/* <DepthOfField
            focusDistance={0.015}
            focalLength={0.015}
            bokehScale={0.5}
            height={480}
          /> */}
            <ToneMapping mode={ToneMappingMode.ACES_FILMIC} resolution={256} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
