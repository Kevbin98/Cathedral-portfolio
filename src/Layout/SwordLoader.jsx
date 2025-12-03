import React, { useRef } from "react";
import { useGLTF, Environment, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";

export function SwordLoader(props) {
  const animation = useRef();

  useFrame((state, delta) => {
    animation.current.rotation.y += delta * 0.5;
  });

  const { nodes, materials } = useGLTF("models/swordNoNormal.glb");
  return (
    <>
      <group
        ref={animation}
        {...props}
        dispose={null}
        position={[0, 0.3, 3.5]}
        scale={[0.7, 0.7, 0.5]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sword_lol.geometry}
          material={materials["sword texture"]}
        />
      </group>
      <Environment files='/hdri/sunset.exr' background={false} />
      <Html center position={[0, -1.5, 0]}>
        <AnimatePresence>
          <motion.div
            key='loading-text'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              color: "#f4e3a1",
              position: "relative",
              transform: "translateX(-50%)", // ✅ true centering for all screen sizes
              textAlign: "center",
            }}
          >
            <motion.p
              style={{
                fontSize: "2rem",
                letterSpacing: 1,
                fontFamily: "Cinzel, serif",
                textShadow: "0 0 10px #c8b44b",
              }}
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Loading...
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </Html>
    </>
  );
}

useGLTF.preload("models/swordNoNormal.glb");
