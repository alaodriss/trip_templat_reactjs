import React from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Shape_top from "../assets/Shape_top.png";
const HeaDer = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 2rem 4.3rem;
    position: relative;
  }
  .logo {
    z-index: 1;
  }
  .pages {
    position: absolute;
    left: 50%;
  }

  ul {
    list-style-type: none;
    display: flex;
    padding: 3rem 0;

    li {
      padding: 0 2rem;
    }
  }

  .bar_search {
    padding: 1.5rem 0;
    position: relative;

    input {
      border: none;
      border-radius: 50px;
      padding: 1.8rem 0px;
      background: rgb(177 163 151);
    }
    .serach {
      position: absolute;
      right: 7%;
      top: 28%;
      font-size: x-large;
    }
  }
  .header::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130%;
    background-image: url(${Shape_top});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const Header = () => {
  return (
    <>
      <HeaDer>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="pages">
            <ul>
              <li> Home</li>
              <li> Menu</li>
              <li> Our Story</li>
              <li> Contact us</li>
            </ul>
          </div>
          <div className="bar_search">
            <input type="text" id="inputID" />{" "}
            <AiOutlineSearch className="serach" />
          </div>
        </div>
      </HeaDer>
    </>
  );
};

export default Header;
