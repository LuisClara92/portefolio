import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import img from '../../img/laptop2.png';
import { Link } from 'react-scroll';
// import DownloadLink from './DownloadPdf';

import { white, RED } from '../../styles/styles';
import StyledButton from '../../styles/button/button';

const Wrapper = styled.div`
    background-image: url(${img});
    background-size: cover;
    height: calc(120vh - 7rem);
    margin-top: -1rem;

    @media screen and (max-width: 950px) {
        height: calc(100vh - 5rem)
    }
    
`

const ColorLayer = styled.div`
    background-color: ${white(0.4)};
    height:100%;
    width: 100%;
    margin-top: 1rem;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    color: ${RED};
    
`

const Greetings = () => (
    <Wrapper>
        <ColorLayer>
            <Typed
                strings={[
                    `Hi my name is Luis Clara.`,
                    `I'm a Web Developer.`
                ]}
                typeSpeed={40}
                backSpeed={30}
                loop
            />
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={700}>
                <StyledButton style={{display: 'inline-block'}} red>Check my projects</StyledButton>
            </Link>
                {/* <StyledButton red>
                    <DownloadLink src="./Luis_Clara.pdf">Download my Resume</DownloadLink>
                </StyledButton> */}
        </ColorLayer>
    </Wrapper>
)

export default Greetings