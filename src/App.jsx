import { useState, useEffect, useRef, Suspense } from "react";
import Experience from "./Components/Experience";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Vignette,
  DepthOfField,
  ToneMapping,
  Noise,
} from "@react-three/postprocessing";
import {
  BlurPass,
  Resizer,
  KernelSize,
  Resolution,
  BlendFunction,
  ToneMappingMode,
} from "postprocessing";
import {
  PerspectiveCamera,
  Loader,
  useProgress,
  Environment,
} from "@react-three/drei";
import "./App.css";
import * as THREE from "three";
import { SwordLoader } from "./Layout/SwordLoader";
import LoadingScreen from "./Layout/LoadingScreen";

function App() {
  return (
    <>
      <Canvas
        camera={{ fov: 50 }}
        gl={{
          antialias: true,

          toneMappingExposure: 0.3,
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
              intensity={0.35}
              luminanceThreshold={0.78}
              luminanceSmoothing={0.15}
              mipmapBlur={true}
              radius={0.85}
            />
            <Vignette eskil={false} offset={0.2} darkness={0.7} />
            <ToneMapping mode={ToneMappingMode.ACES_FILMIC} resolution={256} />
          </EffectComposer>
        </Suspense>
        {/* <SwordLoader /> */}
        <ambientLight intensity={1} />
      </Canvas>
      <LoadingScreen />
    </>
  );
}

export default App;
