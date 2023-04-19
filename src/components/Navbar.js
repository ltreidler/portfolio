/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Body, NavbarLink } from "./emotion/Text";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const navLinks = [
    ["Projects", "projects"],
    ["Technologies", "tech"],
    ["About", "about"],
    ["Contact", "contact"],
  ];

  const scroll = (id) => {
    const view = document.getElementById(id);
    if (!view) return;
    view.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const props = { navLinks, scroll };

  const navCss = css({
    width: "100vw",
    height: "3rem",
    position: "fixed",
    backgroundColor: "white",
    top: 0,
    left: 0,
    right: 0,
    borderBottom: "0.2rem solid black",
    display: "flex",
    zIndex: 3,
    transition: "0.3s",
    justifyContent: "flex-end",
    alignItems: "center",
  });

  const bp = "500px";

  const desktopCss = css`
    @media (max-width: ${bp}) {
      display: none !important;
    }
  `;

  const mobileCss = css`
    @media (min-width: ${bp}) {
      display: none;
    }
  `;

  const [opacity, setOpacity] = useState("0");

  useEffect(() => {
    updateVisibility();
    window.addEventListener("scroll", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const updateVisibility = () => {
    const elem = document.getElementById("projects");

    if (!elem) return;

    const rect = elem.getBoundingClientRect();
    const y = rect["y"];
    if (y <= 79 && opacity !== "100%") {
      setOpacity("100%");
    } else if (y > 79 && opacity !== "0%") {
      setOpacity("0%");
    }
  };

  return (
    <>
      <nav css={[navCss, { opacity: opacity }]}>
        <DesktopNav {...props} mq={desktopCss} />
        <MobileNav {...props} mq={mobileCss} />
      </nav>
    </>
  );
};

const DesktopNav = ({ navLinks, scroll, mq }) => {
  return (
    <div
      css={[
        {
          padding: 0,
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
        },
        mq,
      ]}
    >
      {navLinks.map(([label, id], i) => (
        <NavbarLink onClick={() => scroll(id)} key={i}>
          {label.toUpperCase()}
        </NavbarLink>
      ))}
    </div>
  );
};

const MobileNav = ({ navLinks, scroll, mq }) => {
  const hidden = "translate(0, -27rem)";
  const [position, setPosition] = useState(hidden);

  const mobileCss = css({
    position: "absolute",
    right: 0,
    top: "3.2rem",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    backgroundColor: "white",
    borderBottom: "3px solid black",
    width: "100vw",
    height: "fit-content",
    padding: "0.5rem 0 0.5rem 0",
    overflow: "hidden",
    transition: "0.5s",
  });

  const linkCss = css({
    border: "0px",
    background: "none",
  });

  const toggle = () => {
    if (position.length) setPosition("");
    else setPosition(hidden);
  };

  return (
    <div css={[mq]}>
      <button
        css={{
          border: "0px",
          background: "none",
          zIndex: 14,
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
        }}
        onClick={toggle}
      >
        <i className="fa-solid fa-bars fa-2x" style={{ color: "#000000" }}></i>
      </button>
      <nav css={[mobileCss, { transform: position || "" }]}>
        {navLinks.map(([label, id], i) => (
          <button
            css={linkCss}
            onClick={() => {
              scroll(id);
              setPosition(hidden);
            }}
            key={i}
          >
            <Body css={{ fontSize: "20px" }}>{label}</Body>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
