import React from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Experience;
