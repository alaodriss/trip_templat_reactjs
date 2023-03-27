import React from "react";
import styled from "styled-components";
import image from "../assets/image_bg.png";
import shape_bottom from "../assets/Shape_bottom.png";
import Articles from "./Articles";

const SilDer = styled.div`
  .slider::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
    z-index: -1;
  }
  .block_text_silde {
    width: 50%;
    position: absolute;
    top: 38%;
    left: 4%;
    h1 {
      font-size: 89px;
      font-weight: bolder;
      color: #deb37e;
      text-shadow: rgb(255, 204, 0) 4px 0px 13px;
      margin: 2rem 0;
    }

    button {
      font-size: 18px;
      border: none;
      border-radius: 50px;
      color: #707070;
      padding: 1.5rem 6rem;
      background: #fff;
      margin: 1.4rem 0px;
      font-weight: bolder;
    }

    .text_pg {
      color: #707070;
      font-size: 18px;
      margin: 10px;
      line-height: 1.6;
      font-style: italic;
    }
  }

  .slider_bottom::before {
    content: "";
    display: block;
    position: absolute;
    top: 72%;
    width: 100%;
    height: 100%;
    background-image: url(${shape_bottom});
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
  }

`;

const Header = () => {
  return (
    <>
      <SilDer>
        <div className="slider"></div>
        <div className="block_text_silde">
          <h1 className="text_1">
            IT ' S TIME <br />
            FOR HIKING
          </h1>
          <button className="btn_red_more">READ MORE</button>
          <p className="text_pg">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do iusmod tempor incididunt
            <br /> ut labore et dolore magna.
          </p>
        </div>
        <div className="slider_bottom"></div>
      </SilDer>
     
        <Articles />
      
    </>
  );
};

export default Header;
