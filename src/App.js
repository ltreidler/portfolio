/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from "@emotion/react";
import { colors } from "./components/global";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";

const mainStyle = css({
  backgroundColor: colors.parchment,
  height: "100vh",
  width: "100vw",
  margin: 0,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: "4rem",
});

const globalStyle = css`
  * {
    font-family: "Inconsolata";
  }
`;

console.log(Navbar);

function App() {
  return (
    <>
      <Global styles={globalStyle} />

      <main css={mainStyle}>
        <Navbar />
        <Heading />
      </main>
    </>
  );
}

export default App;
