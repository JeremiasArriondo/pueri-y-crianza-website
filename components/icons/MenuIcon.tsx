import React from "react";
import type { SVGProps } from "react";

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 22L64 22"
        stroke={props.fill}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 40L64 40"
        stroke={props.fill}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 58L64 58"
        stroke={props.fill}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
