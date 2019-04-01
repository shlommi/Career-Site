import React, { Component } from "react";
import {
  NavigationContainer,
  WrapperLeft,
  Logo,
  MenuLinks,
  Link,
  WrapperRight
} from "./NavigationBar.style";

export default class NavigationBar extends Component {
  state = {
    dropDown: false
  };
  render() {
    return (
      <NavigationContainer justify="center" align="center" dropDown>
        <WrapperLeft justify="flex-start" align="center">
          <Logo />
          <MenuLinks justify="center" align="center">
            <Link href="#">Discover Hilton</Link>
            <Link href="#">Our Brands</Link>
            <Link href="#">University</Link>
            <Link href="#">Military</Link>
            <Link href="#">Areas of Talent</Link>
          </MenuLinks>
        </WrapperLeft>
        <WrapperRight justify="center" align="center">
          <MenuLinks justify="center" align="center">
            <Link href="#" hover>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M-8-9h32v32H-8z" />
                  <path
                    d="M16 16.294V14.53C16 12.58 14.32 11 12.25 11h-7.5C2.68 11 1 12.58 1 14.53v1.764M8.5 1C10.433 1 12 2.58 12 4.53c0 1.949-1.567 3.529-3.5 3.529S5 6.479 5 4.529C5 2.58 6.567 1 8.5 1z"
                    stroke="#AEAEAE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              Sign In
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M-7-10h32v32H-7z" />
                  <path
                    d="M2.6 4h12.8c.883 0 1.6.704 1.6 1.571v7.858c0 .868-.717 1.571-1.6 1.571H2.6c-.883 0-1.6-.703-1.6-1.571V5.57C1 4.704 1.717 4 2.6 4zM12 4V2.757C12 1.787 11.328 1 10.5 1h-3C6.672 1 6 1.787 6 2.757V4"
                    stroke="#AEAEAE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              Saved Jobs
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M-7-9h32v32H-7z" />
                  <g
                    stroke="#AEAEAE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                    transform="translate(1 1)"
                  >
                    <circle cx="6.125" cy="6.125" r="6.125" />
                    <path d="M14 14l-3.5-3.5" />
                  </g>
                </g>
              </svg>
              Search Jobs
            </Link>
          </MenuLinks>
        </WrapperRight>
      </NavigationContainer>
    );
  }
}
