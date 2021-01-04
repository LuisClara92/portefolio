import React from "react";
import styled from "styled-components";

import { Element } from "react-scroll";

import Title from "../Title";

import TiltImage from "./TiltImage";
import TextContent from "./TextContent";

import code from "../../img/web-programming2.jpg";
import design from "../../img/sketch2.png";
import responsive from "../../img/responsive2.png";
import idea from "../../img/idea2.png";

const StyledDevelopment = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const StyledImages = styled.div`
  min-width: 20rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(31rem, 1fr));
  place-items: center;
  gap: 2.5rem;

  img {
    height: 6rem;
    width: auto;
    margin: 5rem;
    border-radius:25%;
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;
  }

  .content-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.4rem;
    line-height: 1.8;
    margin: 0 3rem;
    width: 80%;

    p {
      text-align: left;
    }
  }
`;

const Development = () => (
  <div>
    <Element name="development" className="element">
      <Title
        id="development"
        title="Development"
        description="Life is hard and Development tends to be harder. But I try to make it calm and easier."
      />
    </Element>
    <StyledDevelopment>
      <StyledImages>
        <div className="content">
          <TiltImage alt="code" src={code} />
          <TextContent
            title="Code"
            description="I enjoy planning and start coding. My objective is always create code that is easy to read."
          />
        </div>{" "}
        <div className="content">
          <TiltImage alt="design" src={design} className="designImg" />
          <TextContent
            className="designText"
            title="Design"
            description="My focus is learn as much as I can. To be better in design, and create beautifully websites."
          />
        </div>
        <div className="content">
          <TiltImage alt="responsive" src={responsive} />
          <TextContent
            title="Responsive"
            description="My objective is code , no matter the size of the screen."
          />
        </div>
        <div className="content">
          <TiltImage alt="problem-solving" src={idea} />
          <TextContent
            title="Problem Solving"
            description="Always break problems into smaller problems, which allows me to organize my projects, in order to get best results."
          />
        </div>
      </StyledImages>
    </StyledDevelopment>
  </div>
);

export default Development;
