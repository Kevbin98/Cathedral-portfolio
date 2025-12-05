import { useThree, useFrame } from "@react-three/fiber";
import { useEffect } from "react";

export default function DebugCamera() {
  const { camera, gl, scene, size } = useThree();

  useFrame(() => {
    // called every frame
    console.log(camera.position);
  });
  return null;
}
