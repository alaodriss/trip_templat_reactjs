import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import styled from "styled-components";

const ArtiCle = styled.div`
position: relative;
top: 115rem;

.blocks{
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.info{
    background-color: #707070;
    color: #FFF;
    width: 91.5%;

    h2{
        font-size: 18px;
        line-height: 1.6;
        padding : 1rem
    }
    p{
        line-height: 1.6;
        padding : 1rem;
        text-align: start;
    }
}

`;

const Articles = () => {

  const data = [
    {
      id: 1,
      img: `${img1}`,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur ...",
    },
    {
      id: 2,
      img: `${img2}`,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur ...",
    },
    {
      id: 3,
      img: `${img3}`,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur ...",
    },
  ];
  return (
    <>
      <ArtiCle>
        <div className="blocks">
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="img" />
              <div className="info">
                <h2>{item.title} </h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ArtiCle>
    </>
  );
};

export default Articles;
