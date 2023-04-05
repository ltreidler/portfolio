import styled from "@emotion/styled";

export const H1 = styled.h1(
  {
    fontSize: 100,
    fontWeight: 800,
    margin: 0,
  },
  (props) => ({ color: props.color || "black" })
);

export const H2 = styled.h2(
  {
    fontSize: 70,
    fontWeight: 700,
    margin: 0,
  },
  (props) => ({ color: props.color || "black" })
);

export const H3 = styled.h2(
  {
    fontSize: 20,
    fontWeight: 600,
  },
  (props) => ({ color: props.color || "black" })
);

export const Body = styled.p(
  {
    fontSize: 14,
    fontWeight: 500,
  },
  (props) => ({ color: props.color || "black" })
);

export const Link = styled.a(
  {
    fontSize: 18,
    fontWeight: 500,
  },
  (props) => ({ color: props.color || "black" })
);

export const NavLink = styled.a({
  textDecoration: "none",
  fontWeight: 500,
  color: "black",
  fontSize: 30,
  marginLeft: "3rem",
  marginRight: "3rem",
});
