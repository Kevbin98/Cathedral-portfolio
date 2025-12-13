import { useEffect } from "react";
import gsap from "gsap";
import { useThree, useFrame } from "@react-three/fiber";

//camera positions:
// 1: x: -18.97, y: 27.43, z: 54.02
// 2: x: 4.63, y: 13.41, z: -77.35
// 3: x: 4.69, y: 10.14, z: 20.31

const CameraController = ({ target }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (target === "position1") {
      gsap.to(camera.position, {
        x: 3.26,
        y: 10.97,
        z: 46.97,
        duration: 1.6,
        ease: "power3.inOut",
      });
    }

    if (target === "position2") {
      gsap.to(camera.position, {
        x: -18.97,
        y: 27.43,
        z: 54.02,
        duration: 1.6,
        ease: "power3.inOut",
      });
    }

    if (target === "position3") {
      gsap.to(camera.position, {
        x: 4.63,
        y: 13.41,
        z: -77.35,
        duration: 1.6,
        ease: "power3.inOut",
      });
    }

    if (target === "position4") {
      gsap.to(camera.position, {
        x: 4.69,
        y: 15,
        z: 20.31,
        duration: 1.6,
        ease: "power3.inOut",
      });
    }
  }, [target]);

  useFrame(() => {
    camera.lookAt(5, 10, 0);
  });

  return null;
};

export default CameraController;
