/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { NavLink } from "./emotion/Text";
import { H4, Body } from "./emotion/Text";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const barStyles = css({
    width: "100vw",
    height: "3rem",
    position: "fixed",
    backgroundColor: colors.taxiCab,
    top: 0,
    left: 0,
    right: 0,
    borderBottom: "0.2rem solid black",
    display: "flex",
    justifyContent: "flex-start",
    zIndex: 3,
  });

  const navigateCss = css({
    marginLeft: "1rem",
    height: "3rem",
    display: "flex",
    alignItems: "center",
    padding: "0rem 1rem 0rem 1rem",
    fontSize: "20px",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  });

  const [navCss, setNavCss] = useState({ display: "none" });

  const navStyles = css({
    position: "absolute",
    backgroundColor: colors.parchment,
    border: "2px solid black",
    top: "3rem",
    left: "9rem",
    ".navItem": {
      margin: "0.5rem",
      fontSize: "25px",
    },
  });

  const navItemCss = css({
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  });

  const navRef = useRef();

  useEffect(() => {
    if (navRef.current) {
      const nav = navRef.current;
      nav.addEventListener("mouseenter", () => setNavCss({}));

      nav.addEventListener("mouseleave", () => setNavCss({ display: "none" }));
    }

    return () => {
      if (navRef.current) {
        const nav = navRef.current;
        nav.removeEventListener("mouseenter", () => setNavCss({}));

        nav.removeEventListener("mouseleave", () =>
          setNavCss({ display: "none" })
        );
      }
    };
  }, []);

  const scroll = (id) => {
    const view = document.getElementById(id);
    if (!view) return;
    view.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section css={barStyles}>
      <ul
        css={{
          padding: 0,
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Body css={{ marginLeft: "2rem" }}>Portolio</Body>
        <div ref={navRef}>
          <div css={navigateCss}>
            <p>Navigate</p>
          </div>
          <div css={[navCss, navStyles]}>
            {[
              ["Projects", "projects"],
              ["Technologies", "tech"],
              ["About", "about"],
              ["Contact", "contact"],
            ].map((item) => (
              <p
                className="navItem"
                css={navItemCss}
                onClick={() => scroll(item[1])}
              >
                {item[0]}
              </p>
            ))}
          </div>
        </div>
      </ul>
    </section>
  );
};

export default Navbar;
