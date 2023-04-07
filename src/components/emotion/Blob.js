/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { colors } from "../global";

const Blob = ({ color, top, left, outline, index, z }) => {
  const fill = color ? "%23" + colors[color].slice(1) : "none";
  const stroke = outline ? "%23000" : "none";

  const blobDimensions = [
    ["694.6763305664062px", "689.14501953125px"],
    ["802.7100830078125px", "590.9716796875px"],
    ["631.8634643554688px", "746.808837890625px"],
  ];

  const blobUrls = [
    `"data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22694.676%22 height=%22689.145%22 viewBox=%22157.559 167.442 694.676 689.145%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M835.5 644q61.5 144-103 104t-262 50.5q-97.5 90.5-232 40T193 644q89-144 20-273.5T288 266q144 25 238-55.5T718 200q98 70 77 185t40.5 259Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22${fill}%22 stroke=%22${stroke}%22 stroke-width=%2210%22 d=%22M835.5 644q61.5 144-103 104t-262 50.5q-97.5 90.5-232 40T193 644q89-144 20-273.5T288 266q144 25 238-55.5T718 200q98 70 77 185t40.5 259Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"`,
    `"data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22802.71%22 height=%22590.972%22 viewBox=%2256.817 191.8 802.71 590.972%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M831 637.5Q827 775 689 782t-214-49.5Q399 676 244 663T61.5 490.5Q34 331 168 244t253-29q119 58 288.5 12.5T857 341q-22 159-26 296.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22${fill}%22 stroke=%22${stroke}%22 stroke-width=%2210%22 d=%22M831 637.5Q827 775 689 782t-214-49.5Q399 676 244 663T61.5 490.5Q34 331 168 244t253-29q119 58 288.5 12.5T857 341q-22 159-26 296.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"`,
    `"data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22631.863%22 height=%22746.809%22 viewBox=%22171.75 133.823 631.863 746.809%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M791.5 642Q838 784 706 852t-236.5-25.5Q365 733 301 664.5T192 484q-45-112 10-259t198-57q143 90 283 75.5t101 121Q745 500 791.5 642Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22${fill}%22 stroke=%22${stroke}%22 stroke-width=%2210%22 d=%22M791.5 642Q838 784 706 852t-236.5-25.5Q365 733 301 664.5T192 484q-45-112 10-259t198-57q143 90 283 75.5t101 121Q745 500 791.5 642Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"`,
  ];

  const blobStyle = css`
    width: ${blobDimensions[index][0]};
    height: ${blobDimensions[index][1]};
    background-size: cover;
    background-repeat: no-repeat;
    top: ${top};
    left: ${left};
    position: absolute;
    background-image: url(${blobUrls[index]});
    z-index: ${z};
  `;

  console.log(blobStyle);

  return <svg css={blobStyle} />;
};

export default Blob;
