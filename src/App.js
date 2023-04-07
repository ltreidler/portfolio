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
  const mainStyle = css({
    margin: 0,
    padding: 0,
    minHeight: "200vh",
  });

  const globalStyle = css`
    * {
      font-family: "Inconsolata";
      box-sizing: "border-box";
    }
    a {
      text-decoration: none;
      color: black;
    }
  `;

  return (
    <>
      <Global styles={globalStyle} />

      <main css={mainStyle}>
        <Navbar />
        <Heading />
        <Projects />
        <Technologies />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
