import React from "react";
import styled from "styled-components";

import Title from "../Title";

import { Element } from "react-scroll";

import ImageTec from "./ImageTec";

// Profile pic
import foto from "../../img/foto.png";

// PNGs
import express from "../../img/techs/express.png";
import java from "../../img/techs/java.png";
// import graphql from '../../img/techs/graphql.png';
// import jest from '../../img/techs/jest.png';
// import mongodb from '../../img/techs/mongodb.png';
// import mongoose from '../../img/techs/mongoose.png';
import node from "../../img/techs/node.png";
import react from "../../img/techs/react.png";
// import redux from '../../img/techs/redux.png';
import javascript from "../../img/techs/javascript.png";
import html from "../../img/techs/html.png";
import css from "../../img/techs/css.png";
import npm from "../../img/techs/npm.png";
import git from "../../img/techs/git.png";
import github from "../../img/techs/github.png";
// import gitlab from '../../img/techs/gitlab.png';
import sass from "../../img/techs/sass.png";
// import jquery from '../../img/techs/jquery.png';
import figma from "../../img/techs/figma.png";
import styledComponents from "../../img/techs/styled-components.png";
// import typescript from '../../img/techs/ts.png';
// import vue from '../../img/techs/vue.png';
// import swift from '../../img/techs/swift.png';
// import solidity from '../../img/techs/solidity.png';

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
    width: auto;
    height: 16rem;
    border-radius: 50%;
    align-self: center;
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

const AboutMe = () => (
  <div>
    <Element name="about" className="element">
      <Title
        id="about"
        title={"About Me"}
        description={'Passionate with "never stop learning" philosophy.'}
      />
    </Element>

    <StyledAboutMe>
      <div className="aside">
        <img className="profile_foto" alt="foto" src={foto} />

        <div>
          <h1>Who am I?</h1>
          <p>
            Hello, my name is Luis Clara, I live in Portugal and I'm a Junior
            Web Developer. In 2020 I changed my path, creating a new route for
            my future! Why? Because after I started writing my 1st line of
            code, the feeling that I am doing something for the good of the
            community has become real!</p> 
            <p>I integrate a Full Stack Web Developer
            Bootcamp at the Wild Code School in Lisbon(700h). I'm always excited
            to learn new technologies and build new things with them. With my
            background in Biotechnology, I'm good at planning, organizing and
            keeping things simple. And I like to search for the best solution in
            order to present well-structured and complete products.
          </p>
          {/* <cite>
            "Live as if you were to die tomorrow. Learn as if you were to live
            forever" - Mahatma Gandhi
          </cite> */}
        </div>
      </div>

      <StyledTec>
        <h1>My Stack</h1>
        <div className="tecs">
          <ImageTec name="HTML5" src={html} />
          <ImageTec name="CSS3" src={css} />
          <ImageTec name="Javascript" src={javascript} />
          {/* <ImageTec name='JQuery' src={jquery} /> */}
          <ImageTec name="NodeJS" src={node} />
          <ImageTec name="ExpressJS" src={express} />
          {/* <ImageTec name='MongoDB' src={mongodb} />
          <ImageTec name='Mongoose' src={mongoose} />
          <ImageTec name='Vue' src={vue} /> */}
          <ImageTec name="React" src={react} />
          {/* <ImageTec name='React Native' src={react} /> */}
          {/* <ImageTec name='Redux' src={redux} />
          <ImageTec name='GraphQL' src={graphql} />
          <ImageTec name='TypeScript' src={typescript} />
          <ImageTec name='Jest' src={jest} /> */}
          <ImageTec name="SASS" src={sass} />
          <ImageTec name="Styled-Components" src={styledComponents} />
          <ImageTec name="NPM" src={npm} />
          <ImageTec name="GIT" src={git} />
          <ImageTec name="GitHub" src={github} />
          {/* <ImageTec name='GitLab' src={gitlab} /> */}
          <ImageTec name="Figma" src={figma} />
        </div>
      </StyledTec>

      <LearningContainer>
        <h1>Currently self-learning</h1>
        <LearningWrapper>
          <ImageTec name="Java" src={java} />
          {/* {/* <ImageTec name='Swift' src={swift} /> */}
        </LearningWrapper>
      </LearningContainer>
    </StyledAboutMe>
  </div>
);

export default AboutMe;
