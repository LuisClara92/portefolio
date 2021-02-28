import React from 'react';
import styled from 'styled-components';
import {BOX_SHADOW} from "../../styles/styles"


const Overlay = styled.div`
    margin: 2rem;
    
    img {
        height: 20rem;
        border-radius: 2rem;
        ${BOX_SHADOW}
    }

    div {
        font-weight: bold;
        font-size: 1.1rem;
    }
   
`

const ImageProj = (props) => (
    <Overlay>
        <img alt={props.name} src={props.src} />
        <div>{props.name}</div>
    </Overlay>
)

export default ImageProj