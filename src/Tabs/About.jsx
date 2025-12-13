import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import Water from "../assets/WaterVisualizer.png";

const About = () => {
  return (
    <Main>
      <h1>About</h1>
    </Main>
  );
};

const Main = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 10px;
  /* border-image: url("/textures/vintageborder.svg") 20 fill stretch;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat; */
`;

export default About;
