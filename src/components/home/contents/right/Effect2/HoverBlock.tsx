import React from 'react';
import styled from 'styled-components';
import ImageStyle from '../ImageStyle';

const Front = styled(ImageStyle)`
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
    & figcaption {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) translateZ(100px);
        display: block;
        text-align: center;
    }
`;
const Back = styled(ImageStyle)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform-style: preserve-3d;
    transform: rotateY(-180deg);
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
    
    & figcaption {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) translateZ(100px);
        display: block;
        text-align: center;
    }
`;

const Wrapper = styled.div`
    position: relative;
    perspective: 600px;
    display: block;
    &:hover ${Front}{
        transform: rotateY(180deg);
    }
    &:hover ${Back}{
        transform: rotateY(0deg);
        z-index: 1;
    }
    figcaption {
        width: 60%;
        color: #fff;
        font-size: 20px;
        font-family: "Abel", sans-serif;
        font-weight: bold;
        background: rgba(0,0,0,0.6);
        padding: 3px 10px; 
    }
`;


const HoverBlock:React.SFC = () => {
    return(
        <Wrapper>
            <Front>
                <img src="https://user-images.githubusercontent.com/41350459/82142044-8bf5ee00-9874-11ea-96ba-6f93e44be02a.jpg" alt="image2"/>
                <figcaption>Hover Effect</figcaption>
            </Front>
            <Back>
                <img src="https://user-images.githubusercontent.com/41350459/82148891-f7998480-988f-11ea-8e41-1d7bfe5f249e.jpg" alt="image2"/>
                <figcaption>Hover Effect</figcaption>
            </Back>
        </Wrapper>
    );
}

export default HoverBlock;