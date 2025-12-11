import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { IoVolumeMediumSharp, IoVolumeMute } from "react-icons/io5";
import Contact from "../Tabs/Contact";
import Projects from "../Tabs/Projects";
import { content } from "../Content/content";

const tabs = [{ name: "Projects" }, { name: "Contact" }];

const Nav = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
      <Name
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>{content.hero.title}</h1>
        <p>{content.hero.subtitle}</p>
      </Name>
      <Main
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {tabs.map(({ name }) => (
          <p
            key={name}
            onClick={() => setActiveTab(name)}
            $active={activeTab === name}
          >
            {name}
          </p>
        ))}
      </Main>
      <AnimatePresence>
        {activeTab && (
          <TabsContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Close
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ color: "#fff1c2" }}
              onClick={() => setActiveTab(null)}
            >
              Close
            </Close>
            {activeTab === "Projects" && <Projects />}
            {activeTab === "Contact" && <Contact />}
          </TabsContainer>
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

const TabsContainer = styled(motion.div)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /* width: 500px;
  height: 500px; */
  width: 50vw;
  height: 70vh;

  border-radius: 10px;
  background: rgba(20, 15, 10, 0.35);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(200, 185, 120, 0.4);
  color: #e8d9a8;
  font-family: "Cinzel", serif;
  letter-spacing: 1px;
  padding: 16px 20px;
  z-index: 9998;

  /* MOBILE FIX */
  @media (max-width: 600px) {
    padding: 12px 14px;
    left: 60%;
    width: 60vw; /* prevents overflow off screen */
    font-size: 0.7rem;
  }
`;

const Main = styled(motion.div)`
  position: fixed;
  left: 2%;
  top: 15%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px 20px;
  border-radius: 10px;

  background: rgba(20, 15, 10, 0.35);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(200, 185, 120, 0.4);
  color: #e8d9a8;
  font-family: "Cinzel", serif;
  letter-spacing: 1px;

  z-index: 9998;

  p {
    margin: 0;
    padding: 6px 0;
    cursor: pointer;
    transition: 0.25s ease;
    user-select: none;
  }

  p:hover {
    color: #fff1c2;
    transform: translateX(5px); /* slick hover motion */
  }

  @media (max-width: 600px) {
    top: 13%; /* pushes menu down on mobile */
    padding: 12px 16px;
    gap: 12px;
    font-size: 0.6rem;
  }
`;

const Close = styled(motion.div)`
  position: absolute;
  top: 10px;
  right: 12px;
  cursor: pointer;
  border-bottom: 1px solid rgba(200, 185, 120, 0.4);
`;

export default Nav;
