import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import Title from "../Title";
import { RED, BLUE } from "../../styles/styles";

import background from "./data";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;

  .first {
    margin-right: 1rem;
  }

  background: ${RED};
`;

const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  background: white;

  .left:last-child {
    margin-bottom: 0;
  }
`;

const SideRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  background: white;
`;

const BoardLeft = styled.div`
  width: 20rem;
  height: 10rem;
  background: ${RED};
  margin-bottom: 17rem;
  margin-right: 5rem;
  border-radius: 0 0 2rem 2rem;
  position: relative;

  @media (max-width: 900px) {
    width: 12rem;

    p,
    .data-event {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }

  .circle {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    background: ${RED};
    position: absolute;
    right: -8rem;
    top: -0.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      margin: 0;
    }
  }

  .data-event {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    color: white;

    .organization {
      font-size: 1.1rem;
    }

    .link-event {
      text-decoration: none;
      color: ${BLUE};
      font-weight: bold;
    }
  }

  .board__header {
    height: 4rem;
    background: ${BLUE};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1.2rem;

    span {
      width: 2rem;
      height: 2rem;
      background: ${BLUE};
      position: absolute;
      right: -1rem;
      transform: rotate(45deg);
    }

    p {
      color: white;
      margin: 0;
    }
  }
`;

const BoardRight = styled.div`
  width: 20rem;
  height: 10rem;
  background: ${RED};
  margin-top: 15rem;
  margin-left: 5rem;
  border-radius: 0 0 2rem 2rem;
  position: relative;

  @media (max-width: 900px) {
    width: 12rem;

    p,
    .data-event {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
  .circle {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    background: ${RED};
    position: absolute;
    left: -8rem;
    top: -0.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      margin: 0;
    }
  }

  .board__header {
    height: 4rem;
    background: ${BLUE};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1.2rem;

    span {
      width: 2rem;
      height: 2rem;
      background: ${BLUE};
      position: absolute;
      left: -1rem;
      transform: rotate(45deg);
    }

    p {
      color: white;
      margin: -5px;
    }
  }

  .data-event {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    color: white;

    .organization {
      font-size: 1rem;
    }

    .link-event {
      text-decoration: none;
      color: ${BLUE};
      font-weight: bold;
    }
  }
`;

const Background = () => (
  <div>
    <Element name="background" className="element">
      <Title
        id="background"
        title={"Background"}
        description={"Never old to learn something new!"}
      />
    </Element>
    <Wrapper>
      <SideLeft className="first">
        {background.map(
          (background, i) =>
            i % 2 === 0 && (
              <BoardLeft key={i} className="left">
                <div className="board__header">
                  <span />
                  <p>{background.title}</p>
                </div>
                <div className="data-event">
                  <div className="organization">{background.organization}</div>
                  <a
                    className="link-event"
                    href={background.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </div>
                <span className="circle">
                  <p>{background.yearInit}</p>
                  <p>{background.yearFinish}</p>
                </span>
              </BoardLeft>
            )
        )}
      </SideLeft>
      <SideRight>
        {background.map(
          (background, i) =>
            !(i % 2 === 0) && (
              <BoardRight key={i}>
                <div className="board__header">
                  <span />
                  <p>{background.title}</p>
                </div>
                <div className="data-event">
                  <div className="organization">{background.organization}</div>
                  <a
                    className="link-event"
                    href={background.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </div>
                <span className="circle">
                  <p>{background.yearInit}</p>
                  <p>{background.yearFinish}</p>
                </span>
              </BoardRight>
            )
        )}
      </SideRight>
    </Wrapper>
  </div>
);

export default Background;
