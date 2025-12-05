import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls, Environment } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import CameraDebug from "./CameraDebug";
import { Cathedral } from "./Cathedral";
import DustParticles from "./DustParticles";
// import { Perf } from "r3f-perf";

const Experience = () => {
  return (
    <>
      {/* <ambientLight intensity={2} color='#D8A35E' /> */}
      {/* <Perf position='top-left' /> */}
      <OrbitControls />
      <Cathedral />
      <DustParticles />
      <Environment files='/hdri/sunset.exr' background={true} />
      {/* <CameraDebug /> */}
    </>
  );
};

export default Experience;
