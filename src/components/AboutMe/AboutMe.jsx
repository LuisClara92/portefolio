import React from "react";
import styled from "styled-components";

import Title from "../Title";

import { Element } from "react-scroll";

import ImageTec from "./ImageTec";
import babel from "../../img/techs/babel (2).png";

// Profile pic
import foto from "../../img/foto perfil.jpeg";

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
    width: 25rem;
    height: 25rem;
    border-radius: 75%;
    align-self: center;
  }
  @media screen and (max-width: 1100px) {
    .profile_foto {
      width: 25rem;
    }
  }
  @media screen and (max-width: 1500px) {
    .aside {
      flex-direction: column;
    }
  }
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
        description={'I recently learned philosophy, never stop learning!'}
      />
    </Element>

    <StyledAboutMe>
      <div className="aside">
        <img className="profile_foto" alt="foto" src={foto} />

        <div>
          <h1>Hello, my name is Luis Clara!</h1>
          <p>
            I live in Portugal and I'm a 
            RPA Developer in training. In 2020 I changed my path, creating a new route for
            my future! Why? Because after I started writing my 1st line of code,
            the feeling that I am doing something for the good of the community
            has become real!
          </p>
          <p>
            I attended a Full Stack Web Developer Bootcamp at the Wild Code
            School in Lisbon (700h). I'm always excited to learn new technologies
            and build new things with them. With my background in Biotechnology,
            I'm good at planning, organizing and keeping things simple. And I
            like to search for the best solution in order to present
            well-structured and complete products.
          </p>
          <p>
           After the bootcamp I never stopped learning. 
           I have already completed a training in Java SE 11 with OOP (80h), 
           and now I am going to start a new project.</p> 

           <h1>RPA - Robotic Process Automation </h1>
           <ImageTec name="Babel - Sistemas de Informação" src={babel} />
           <p>
            Basically I will learn to develop automate processes in a robotic way. New adventures, here I come! 
          </p>
          {/* <cite>
            "Live as if you were to die tomorrow. Learn as if you were to live
            forever" - Mahatma Gandhi
          </cite> */}
        </div>
      </div>
    </StyledAboutMe>
  </div>
);

export default AboutMe;
