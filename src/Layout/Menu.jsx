import { useEffect, useState, useRef } from "react";
import { Html } from "@react-three/drei";
import styled from "styled-components";
import { useThree, useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import Ornate from "/textures/vintageborder.svg";
import * as THREE from "three";
import { content } from "../Content/content";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// camera pos 1 x: 5.230021038795696 y: 15.68190884828402 z: 45.58296730514486

const tabs = [{ name: "Hero" }, { name: "Projects" }, { name: "Contact" }];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Hero");
  const { camera, viewport } = useThree();
  const htmlRef = useRef();

  const uiScale = viewport.width < 6 ? 0.45 : viewport.width < 10 ? 0.7 : 1;

  useFrame((state, delta) => {
    if (!htmlRef.current) return;

    //get position of Html element
    const htmlPos = htmlRef.current.position;
    // console.log(pos);

    // Create the target camera position *with* the offset
    const target = htmlPos.clone();
    target.z += 2.25;

    // Smoothly move camera toward the target
    camera.position.lerp(target, 0.5);

    // Optional: ensure camera looks at the UI
    camera.lookAt(htmlPos);
  });

  return (
    <>
      <group
        ref={htmlRef}
        position={[5.23, 15.68, 45.58]}
        scale={[0.5, 0.5, 0.5]}
      >
        <Html
          transform
          // as='div'
          zIndexRange={[0, 10]}
          distanceFactor={3}
          occlude={false}
        >
          <AnimatePresence>
            <MainContainer
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TabsContainer>
                {tabs.map(({ name }) => (
                  <button
                    key={name}
                    onClick={() => setActiveTab(name)}
                    $active={activeTab === name}
                  >
                    {name}
                  </button>
                ))}
              </TabsContainer>
              <Content>
                {activeTab === "Hero" && (
                  <Header>
                    <h1>{content.hero.title}</h1>
                    <p>{content.hero.subtitle}</p>
                  </Header>
                )}

                {activeTab === "Projects" && <p>Projects</p>}
                {activeTab === "Contact" && <p>Contact</p>}
              </Content>
            </MainContainer>
          </AnimatePresence>
        </Html>
      </group>
    </>
  );
};

const MainContainer = styled(motion.div)`
  /* background-color: rgba(0, 0, 0, 0.4); */
  background: url("/textures/vintageborder.png");
  background-position: center;
  /* background-size: cover; */
  background-size: 100% 100%;
  /* opacity: 0.7; */
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  font-family: Cinzel, serif;
  color: white;
  max-width: 80vw;
  overflow: hidden;
  /* height: 20vh;
  width: 30vw;
  overflow: hidden; */
`;

const TabsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Header = styled(motion.div)`
  color: white;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    padding: 0;
    line-height: 1; /* tighten vertical spacing */
  }

  p {
    margin: 0;
    margin-top: 2px; /* adjust this value for desired tightness */
    padding: 0;
    line-height: 1.1;
  }
`;

const Content = styled(motion.div)`
  color: white;
  text-shadow: 0 0 10px #c8b44b;
  padding: 50px;
  flex: 1;
  overflow: hidden;
  /* background: url("/textures/vintageborder.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box; */
`;

export default Menu;
