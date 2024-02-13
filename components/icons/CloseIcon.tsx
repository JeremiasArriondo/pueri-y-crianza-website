import React from "react";
import type { SVGProps } from "react";

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.4437 24.5566L38.5858 38.6988L41.4142 41.5272L55.5564 55.6693"
        stroke={props.fill}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55.5563 24.5566L41.4142 38.6988L38.5858 41.5272L24.4436 55.6693"
        stroke={props.fill}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
