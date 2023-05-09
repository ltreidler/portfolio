/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Box from "./emotion/Box";
import { Link } from "./emotion/Text";

export default () => {
  const articleCss = css({
    marginTop: "1rem",
    display: "flex",
    justifyContent: "flex-end",
  });

  return (
    <article css={articleCss}>
      <Box css={{ width: "fit-content" }}>
        <Link
          href="https://github.com/ltreidler/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github link for this site.
        </Link>
      </Box>
    </article>
  );
};
