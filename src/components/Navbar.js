/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { NavLink } from "./emotion/Text";
import { H4, Body } from "./emotion/Text";
import { useState, useEffect, useRef } from "react";

// window.onscroll = () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (pageYOffset >= sectionTop ) {
//       current = section.getAttribute("id"); }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };

const Navbar = () => {
  const barStyles = css({
    width: "100vw",
    height: "3rem",
    position: "sticky",
    backgroundColor: "white",
    top: 0,
    left: 0,
    right: 0,
    borderBottom: "0.2rem solid black",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 3,
    transition: "0.3s",
  });

  const linkStyle = css({
    marginRight: "2rem",
    transition: "0.3s",
    "&:hover": {
      color: colors.royalBlue,
      transform: "translate(0,-0.1rem)",
    },
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
  const [opacity, setOpacity] = useState("0");
  const barRef = useRef();

  useEffect(() => {
    if (barRef.current) updateVisibility();
    window.addEventListener("scroll", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const updateVisibility = () => {
    if (!barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();
    const y = rect["y"];
    if (y <= 0 && opacity !== "100%") {
      setOpacity("100%");
    } else if (y > 0 && opacity !== "0%") {
      setOpacity("0%");
    }
  };

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
    <section css={[barStyles, { opacity: opacity }]} ref={barRef}>
      <ul
        css={{
          padding: 0,
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        {[
          ["Projects", "projects"],
          ["Technologies", "tech"],
          ["About", "about"],
          ["Contact", "contact"],
        ].map(([label, id]) => (
          <Body css={linkStyle} color="black" onClick={() => scroll(id)}>
            {label.toUpperCase()}
          </Body>
        ))}
      </ul>
    </section>
  );
};

export default Navbar;
