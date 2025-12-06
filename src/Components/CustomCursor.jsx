import { useState, useEffect } from "react";
import Cursor from "/textures/cursor.svg";
import { motion, AnimatePresence, scale } from "framer-motion";
import styled from "styled-components";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  //   console.log(mousePosition);
  return (
    <motion.div
      style={{
        position: "fixed",
        left: mousePosition.x,
        top: mousePosition.y,
        width: "40px",
        height: "40px",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)", // center the cursor image
        backgroundImage: `url(${Cursor})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        // filter: "drop-shadow(0 0 12px rgba(255,255,255,0.9))",
        filter: "drop-shadow(0 0 12px #ebe155)",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
