import React from "react";
import * as THREE from "three";
import { OrbitControls, Environment } from "@react-three/drei";
import { Cathedral } from "./Cathedral";

const Experience = () => {
  return (
    <>
      {/* <ambientLight intensity={2} color='#D8A35E' /> */}
      <OrbitControls />
      <Cathedral />
      <Environment files='/hdri/sunset.exr' background={true} />
    </>
  );
};

export default Experience;
