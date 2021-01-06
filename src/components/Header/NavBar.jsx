import React from 'react';
import styled from 'styled-components';
import { RED } from '../../styles/styles';
import { Link } from 'react-scroll';


const StyledNavBar = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 2rem;
    font-size: 1rem;
    
    .navbar_item {
        text-decoration: none;
        font-weight: bold;
        transition: 0.5s;
        color: white;
        display: flex;
        align-items: center;
        padding: 0 1rem;
    }

    .navbar_item:hover {
        cursor: pointer;
        background: ${RED}
    }

    @media screen and (max-width: 950px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 750px) {
        margin-right:1rem;
        font-size: 1rem;
    }
`


const NavBar = () => (
        <StyledNavBar>
            <Link className="navbar_item" href="#about" activeClass="active" to="about" spy={true} smooth={true} duration={700}>
                About
            </Link>
            <Link className="navbar_item" href="#background" activeClass="active" to="background" spy={true} smooth={true} duration={700}>
                Background
            </Link>
            <Link className="navbar_item" href="#stack" activeClass="active" to="stack" spy={true} smooth={true} duration={700}>
                Stack
            </Link>
            <Link className="navbar_item" href="#development" activeClass="active" to="development" spy={true} smooth={true} duration={700}>
                Development
            </Link>
            <Link className="navbar_item" href="#portfolio" activeClass="active" to="portfolio" spy={true} smooth={true} duration={700}>
                Projects
            </Link>
            <Link className="navbar_item" href="#contact" activeClass="active" to="contact" spy={true} smooth={true} duration={700}>
                Contact
            </Link>
        </StyledNavBar>

);

export default NavBar;