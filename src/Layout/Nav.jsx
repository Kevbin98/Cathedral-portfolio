import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "../Tabs/Contact";
import Projects from "../Tabs/Projects";
import About from "../Tabs/About";
import { content } from "../Content/content";
import {
  IoVolumeHighOutline,
  IoVolumeMuteOutline,
  IoReturnDownBackOutline,
} from "react-icons/io5";
import { useAudio } from "../Context/AudioProvider";

const tabs = [{ name: "Projects" }, { name: "About" }, { name: "Contact" }];

const Nav = () => {
  const [activeTab, setActiveTab] = useState("Projects");
  const [isOpen, setIsOpen] = useState(null);
  const { playAudio, pauseAudio, isPlaying } = useAudio();

  return (
    <>
      <AnimatePresence>
        <Name
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1>{content.hero.title}</h1>
          <p>{content.hero.subtitle}</p>
        </Name>
        <PortfolioAnchor>
          <Ornate />
          <Main
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p onClick={() => setIsOpen(true)}>Portfolio</p>
          </Main>
          <Volume
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {isPlaying ? (
              <IoVolumeHighOutline onClick={pauseAudio} />
            ) : (
              <IoVolumeMuteOutline onClick={playAudio} />
            )}
          </Volume>
        </PortfolioAnchor>
        {isOpen && (
          <StartMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Content>
              <Tab
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {activeTab}
              </Tab>

              <Back
                onClick={() => setIsOpen(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ textShadow: " 0 0 10px #fff1c2" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <IoReturnDownBackOutline />
                Back
              </Back>
              {activeTab === "Projects" && <Projects />}
              {activeTab === "About" && <About />}
              {activeTab === "Contact" && <Contact />}
              {/* <Contact /> */}
              <TabsButtons>
                {tabs.map(({ name }) => (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    key={name}
                    onClick={() => setActiveTab(name)}
                    $active={activeTab === name}
                  >
                    {name}
                  </motion.button>
                ))}
              </TabsButtons>
            </Content>
          </StartMenu>
        )}
      </AnimatePresence>
    </>
  );
};

const Name = styled(motion.div)`
  color: #e8d9a8;
  text-shadow: 0 0 10px #c8b44b;
  font-size: 1.2rem;
  border-bottom: 3px solid rgba(200, 185, 120, 0.4);
  position: fixed;
  left: 2%;
  top: 3%;
  cursor: default;

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

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const Main = styled(motion.div)`
  position: absolute;
  left: 60px; /* horizontal offset from corner */
  top: 0; /* vertical alignment tweak */

  display: flex;
  flex-direction: column;
  gap: 16px;

  /* padding: 16px 20px; */
  border-radius: 10px;
  /* color: #e8d9a8; */

  font-family: "Cinzel", serif;
  letter-spacing: 1px;

  pointer-events: auto; /* IMPORTANT: re-enable clicks */

  p {
    margin: 0;
    padding: 6px 0;
    cursor: pointer;
    user-select: none;
    font-size: 1.5rem;
    color: #e8d9a8;

    text-shadow: 0 0 4px rgba(190, 160, 70, 0.35);
  }
`;

const Volume = styled(motion.div)`
  font-size: 2rem;
  position: absolute;
  left: 13px;
  top: 50px;
  color: #e8d9a8;

  text-shadow: 0 0 4px rgba(190, 160, 70, 0.35);
  pointer-events: auto;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const PortfolioAnchor = styled.div`
  position: fixed;
  left: 2%;
  top: 15%;
  z-index: 9997;
  pointer-events: none; /* default */
`;

const Ornate = styled(motion.div)`
  position: fixed;
  width: 70px;
  height: 70px;
  left: 2%;
  top: 15%;

  background-image: url("/textures/Corner.svg");
  background-size: contain;
  background-repeat: no-repeat;

  pointer-events: none; /* purely decorative */
  z-index: 9997;
`;

const StartMenu = styled(motion.div)`
  position: fixed;
  inset: 0; /* full screen */
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(20, 15, 10, 0.8);
  backdrop-filter: blur(8px);

  /* border-top: 6px solid gold;
  border-bottom: 6px solid gold; */

  color: #e8d9a8;
  font-family: "Cinzel", serif;
  letter-spacing: 1px;
  box-sizing: border-box;
  z-index: 9998;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/textures/background2.png");
    background-position: center;
    background-size: cover;
    opacity: 0.3;
    pointer-events: none;
  }

  /* MOBILE FIX */
  @media (max-width: 600px) {
    /* padding: 12px 14px; */
    font-size: 0.7rem;
  }
`;

const Content = styled(motion.div)`
  border-top: 4px solid gold;
  border-bottom: 4px solid gold;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90%;
`;

const TabsButtons = styled(motion.div)`
  pointer-events: auto;
  position: fixed;
  width: 100%;
  bottom: 3%;
  display: flex;
  justify-content: space-around;

  /* position: fixed;
  bottom: 3%; */

  button {
    padding: 6px 40px;
    border: 2px solid #776b42;
  }

  @media (max-width: 600px) {
    button {
      padding: 6px 20px;
    }
  }
`;

const Tab = styled(motion.div)`
  position: absolute;
  top: 10;
  left: 5%;
  border: 2px solid #776b42;
  text-align: center;
  font-size: 1.5rem;
  padding: 5px 50px;
  border-radius: 0 0 10px 10px;
  background: linear-gradient(
    145deg,
    rgba(60, 45, 25, 0.9),
    rgba(30, 20, 10, 0.9)
  );
  backdrop-filter: blur(2px);

  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6),
    0 0 15px rgba(200, 180, 75, 0.35);
`;

const Back = styled(motion.div)`
  position: absolute;
  top: 60px;
  right: 5%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  gap: 5px;
`;

export default Nav;
