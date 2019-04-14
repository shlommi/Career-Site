import React from "react";
import styled from "styled-components";

export default function ChatIcon() {
  return (
    <IconWarpper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="56"
        height="56"
        viewBox="0 0 56 56"
      >
        <defs>
          <circle id="a" cx="28" cy="28" r="28" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <use fill="#2DA9DC" xlinkHref="#a" />
          <g fill="#FFF" mask="url(#b)">
            <path
              fillRule="nonzero"
              d="M37.385 33.558a10.77 10.77 0 0 0 1.58-5.628V10.62h-21.93v17.31c0 2.058.577 3.985 1.58 5.628-5.445 0-9.874 4.4-9.874 9.807V62.76h38.518V43.365c0-5.407-4.43-9.807-9.874-9.807zM19.59 13.16h16.818v4.977H19.59V13.16zm16.818 7.517v1.836c-1.21.57-2.587.871-4.027.871-2.677 0-5.098-1.056-6.485-2.707h10.512zm-16.818 0h3.281l.007.015a5.168 5.168 0 0 1-3.288 2.535v-2.55zm0 5.142a7.723 7.723 0 0 0 4.895-2.929 9.64 9.64 0 0 0 1.73 1.354c1.786 1.099 3.919 1.68 6.166 1.68 1.403 0 2.765-.23 4.027-.67v2.676c0 4.605-3.773 8.352-8.41 8.352-4.636 0-8.408-3.747-8.408-8.352V25.82zm-8.293 34.043V43.365c0-4.007 3.282-7.267 7.317-7.267h2.14A10.963 10.963 0 0 0 28 38.82c2.775 0 5.311-1.03 7.245-2.723h2.14c4.035 0 7.317 3.26 7.317 7.267v16.497H11.298z"
            />
            <path d="M24.676 46.447h6.648v2.539h-6.648zM24.676 41.365h6.648v2.539h-6.648z" />
          </g>
        </g>
      </svg>
    </IconWarpper>
  );
}

const IconWarpper = styled.span`
  position: absolute;
  right: 3%;
  bottom: 6%;
`;
