import React, { Component } from "react";
import { Wrapper, FlexDiv } from "../../theme/grid";
import {
  NavigationContainer,
  Logo,
  Link,
  DropdownDiv,
  GridContainer,
  SearchField,
  CloseDiv,
  Suggest,
  Category
} from "./NavigationBar.style";

export default class NavigationBar extends Component {
  state = {
    dropDown: false,
    term: "",
    selectedItem: 3
  };

  handleChangeInput = e => {
    this.setState({ term: e.target.value });
  };

  handleItemClick = itemId => {
    console.log(itemId);
    this.setState(() => ({ selectedItem: itemId }));
  };

  handleDropdownOnClicked = () => {
    if (this.state.dropDown === true) return;
    this.setState(() => {
      return { dropDown: true };
    });
    this.props.handleOverlayOnClick();
  };

  handleCloseDropdownOnClick = () => {
    this.setState(() => {
      return {
        term: "",
        dropDown: false
      };
    });
    this.props.handleOverlayOnClick();
  };

  render() {
    const { term, dropDown, selectedItem } = this.state;
    return (
      <NavigationContainer justify="center" align="center">
        <Wrapper>
          <FlexDiv justify="space-between">
            <Logo />
            <FlexDiv justify="center" align="center">
              <Link className="main-nav" href="#">
                About Us
              </Link>
              <Link className="main-nav" href="#">
                Our Brands
              </Link>
              <Link className="main-nav" href="#">
                University
              </Link>
              <Link className="main-nav" href="#">
                Military
              </Link>
              <Link className="main-nav" href="#">
                Areas of Talent
              </Link>
            </FlexDiv>
            <FlexDiv justify="center" align="center">
              <Link href="#" className="sub-nav">
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
              <Link href="#" className="sub-nav">
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
              <Link
                href="#"
                className="sub-nav"
                onClick={this.handleDropdownOnClicked}
              >
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
            </FlexDiv>
          </FlexDiv>
        </Wrapper>
        <DropdownDiv dropDown={dropDown}>
          <GridContainer>
            <SearchField>
              <form>
                <input
                  type="text"
                  list="categories"
                  value={term}
                  onChange={this.handleChangeInput}
                  placeholder="Enter Job Title or Location"
                />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M-7-9h32v32H-7z" />
                      <g
                        stroke="#4a4a4a"
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
                </span>

                <Suggest>
                  <ul>
                    <li className="grey">JOB CATEGORIES</li>

                    {categoriesList.map(item => {
                      return (
                        <Category
                          key={item.id}
                          onClick={() => this.handleItemClick(item.id)}
                          style={{
                            color: `${
                              selectedItem === item.id ? "#2da9dc" : "#a4a4a4"
                            }`
                          }}
                        >
                          {item.name}
                        </Category>
                      );
                    })}
                  </ul>
                </Suggest>
              </form>
            </SearchField>
            <CloseDiv onClick={this.handleCloseDropdownOnClick}>X</CloseDiv>
          </GridContainer>
        </DropdownDiv>
      </NavigationContainer>
    );
  }
}

const categoriesList = [
  { id: 0, name: "Business Development" },
  { id: 1, name: "Engineering" },
  { id: 2, name: "Information Technology" },
  { id: 3, name: "Sales" },
  { id: 4, name: "Marketing Manager" }
];
