import React from "react";
import { useState, useEffect } from "react";
import { Loader, useProgress } from "@react-three/drei";
import IconLogo from "/textures/icon.png";
import LoadingLogo from "/textures/Loading.png";
import styled from "styled-components";
import { motion, AnimatePresence, scale } from "framer-motion";
import Button from "../Components/Button";

const LoadingScreen = ({}) => {
  const { progress } = useProgress();

  const isComplete = progress >= 100;

  return (
    <AnimatePresence>
      <Main
        key='loading-text'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {!isComplete && (
          <Percentage
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {Math.floor(progress)}%
          </Percentage>
        )}

        {isComplete && <Button text={"Enter"} />}

        {!isComplete && (
          <Icon
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={LoadingLogo}
          />
        )}
      </Main>
    </AnimatePresence>
  );
};

const Main = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: black;
  background: radial-gradient(
      circle at center,
      #3c2f1c 0%,
      #0d0904 50%,
      #000 100%
    ),
    repeating-radial-gradient(
      circle at 0 0,
      rgba(255, 255, 255, 0.02) 0,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px,
      transparent 3px
    );
  border-top: 6px solid gold;
  border-bottom: 6px solid gold;
  color: white;
  font-size: 2rem;
  z-index: 9999999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Percentage = styled(motion.p)`
  font-size: 1.2rem;
  letter-spacing: 1;
  font-family: Cinzel, serif;
  text-shadow: 0 0 10px #c8b44b;
`;

const Icon = styled(motion.img)`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 150px;
  width: 150px;
  pointer-events: none;
  z-index: 0;
`;

export default LoadingScreen;
