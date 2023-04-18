/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from "@emotion/react";
import { colors } from "./components/global";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";

function App() {
  const grid = colors.white + "40";
  const mainStyle = css({
    margin: 0,
    padding: 0,
    height: "100%",
    backgroundColor: "black",
    backgroundImage: `linear-gradient(${grid} .1em, transparent .1em), linear-gradient(90deg, ${grid} .1em, transparent .1em)`,
    backgroundAttachment: "fixed",
    backgroundSize: "3em 3em",
  });

  const globalStyle = css`
    * {
      font-family: "Inconsolata";
      box-sizing: "border-box";
    }
    a {
      text-decoration: none;
      color: black;
      transition: 0.3s;
    }
    a:hover {
      color: ${colors.royalBlue};
    }
    body {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
    }
  `;

  return (
    <>
      <Global styles={globalStyle} />

      <main css={mainStyle}>
        <Heading />
        <Navbar />
        <Projects />
        <Technologies />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
