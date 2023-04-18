/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { NavLink } from "./emotion/Text";
import { H4, Body, NavbarLink } from "./emotion/Text";
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
    position: "sticky",
    backgroundColor: "white",
    top: 0,
    left: 0,
    right: 0,
    borderBottom: "0.2rem solid black",
    display: "flex",
    zIndex: 3,
    transition: "0.3s",
    justifyContent: "flex-end",
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

  return (
    <nav css={[navCss, { opacity: opacity }]} ref={barRef}>
      <DesktopNav {...props} mq={desktopCss} />
      <MobileNav {...props} mq={mobileCss} />
    </nav>
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
      {navLinks.map(([label, id]) => (
        <NavbarLink onClick={() => scroll(id)}>
          {label.toUpperCase()}
        </NavbarLink>
      ))}
    </div>
  );
};

const MobileNav = ({ navLinks, scroll, mq }) => {
  return (
    <div css={mq}>
      <input type="checkbox" />
      <i class="fa-solid fa-bars fa-2x" style={{ color: "#000000" }}></i>
    </div>
  );
};

export default Navbar;
