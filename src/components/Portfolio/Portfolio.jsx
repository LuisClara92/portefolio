/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Title from "../Title";
import { Element } from "react-scroll";
import { projects } from "./Projects";
import { mobile } from "./Projects";
import ImageProj from "./ImageProj";
import passion from "../../img/Your-Passion.png";

import * as S from "./Portfolio.styled";

const Portfolio = () => {
  const [isWeb, setIsWeb] = useState(true);
  return (
    <div>
      <Element name="portfolio" className="element">
        <Title
          title="Projects"
          description="Check my progress and open my projects."
        />
      </Element>
      <S.StyledPortfolio>
        <ImageProj alt="" src={passion} />
      </S.StyledPortfolio>
      {/* <S.Buttons>
        <S.Button onClick={() => setIsWeb(true)} isWeb={isWeb}>
          Web
        </S.Button>
        <S.Button onClick={() => setIsWeb(false)} isWeb={!isWeb}>
          Mobile
        </S.Button>
      </S.Buttons> */}

      <S.StyledPortfolio>
        {isWeb ? (
          <div className="my-work">
            {projects.map((project, i) => {
              return (
                <div key={i} className="project">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt={project.title} src={project.img} />
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>{project.title}</h2>
                  </a>
                  <p className="portfolio-description">{project.description}</p>
                  <a
                    href={project.github}
                    className="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GitHub</span>
                    <i className="fab fa-github" />
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          mobile.map((app) => (
            <S.Wrapper>
              {/* <h1>{app.title}</h1>
              <S.appImg alt='img' src={app.img} />
              <S.Paragraph>
                An app built both for Android and IOS. The goal of this app is to manage expenses
                between two people, where both can add expenses (Self or Split), and check the
                evolution throughout the year.
                For more informations contact me.

                <S.SmallText>
                  Stack: <br />
                  React-Native, Styled Components, Redux, D3.js, MongoDB
                </S.SmallText>
              </S.Paragraph> */}
            </S.Wrapper>
          ))
        )}
      </S.StyledPortfolio>
    </div>
  );
};

export default Portfolio;
