import React from "react";
import styled from "styled-components";

import Title from "../Title";

import { Element } from "react-scroll";

import ImageTec from "./ImageTec";

// PNGs
import express from "../../img/techs/express.png";
import java from "../../img/techs/java.png";
import node from "../../img/techs/node.png";
import react from "../../img/techs/react.png";
import javascript from "../../img/techs/javascript.png";
import html from "../../img/techs/html.png";
import css from "../../img/techs/css.png";
import npm from "../../img/techs/npm.png";
import git from "../../img/techs/git.png";
import github from "../../img/techs/github.png";
import sass from "../../img/techs/sass.png";
import figma from "../../img/techs/figma.png";
import styledComponents from "../../img/techs/styled-components.png";

const StyledAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 3rem auto;

  .aside {
    display: flex;
    margin-bottom: 3rem;
  }

  .aside h1 {
    align-self: flex-end;
  }

  .aside p {
    margin: 3rem 6rem;
    font-size: 1.5rem;
    text-align: justify;
    line-height: 2.5rem;
    margin-bottom: 3rem;
  }

  .aside cite {
    font-size: 1.1rem;
  }

  .profile_foto {
    position: relative;
    width: 40rem;
    height: 15rem;
    border-radius: 75%;
    align-self: center;
  }
  @media screen and (max-width: 1100px) {
    .profile_foto {
      width: auto;
    }
  }
  @media screen and (max-width: 950px) {
    .aside {
      flex-direction: column;
    }
  }
`;

const StyledTec = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2.5rem;

  .tecs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;

const LearningContainer = styled.div`
  margin: 0 auto;
  box-shadow: 0 0 1rem grey;
  border-radius: 10px;
  padding: 1rem 3rem;
  justify-content: center;
  align-items: center;
`;

export const LearningWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stack = () => (
  <div>
    <Element name="stack" className="element">
      <Title
        id="stack"
        title={"My Stack"}
        description={'All my knowledge until now.'}
      />
    </Element>
    <StyledAboutMe>
      <StyledTec>
        {/* <h1>My Stack</h1> */}
        <div className="tecs">
          <ImageTec name="HTML5" src={html} />
          <ImageTec name="CSS3" src={css} />
          <ImageTec name="Javascript" src={javascript} />
          <ImageTec name="NodeJS" src={node} />
          <ImageTec name="ExpressJS" src={express} />
          <ImageTec name="React | Redux" src={react} />
          <ImageTec name="SASS" src={sass} />
          <ImageTec name="Styled-Components" src={styledComponents} />
          <ImageTec name="NPM" src={npm} />
          <ImageTec name="GIT" src={git} />
          <ImageTec name="GitHub" src={github} />
          <ImageTec name="Figma" src={figma} />
        </div>
      </StyledTec>

      <LearningContainer>
        <h1>Currently self-learning</h1>
        <LearningWrapper>
          <ImageTec name="Java" src={java} />
        </LearningWrapper>
      </LearningContainer>
    </StyledAboutMe>
  </div>
);

export default Stack;
