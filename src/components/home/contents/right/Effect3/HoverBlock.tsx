import React from 'react';
import styled from 'styled-components';
import ImageStyle from '../ImageStyle';

const Wrapper = styled(ImageStyle)`
    position: relative;
    background: #000;
    overflow: hidden;
    transition: all 0.3s ease;
    &:hover img{
        opacity: 0.4;
    }
    & figcaption {
        position: absolute;
        left: 50%;
        top: 50%;
        color: #fff;
        text-align: center;
        opacity: 0;
        text-transform: uppercase;
        transition: all 0.3s ease;
        transform: translate(350%, -50%) rotate(180deg);
        & h3{
            font-size: 16px;
        }
        & em {
            display: block;
            font-weight: bold;
        }
        &:after {
            content: "";
            width: 100px;
            height: 100px;
            background: #000;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: -1;
            transform: translate(-50%, -50%);
        }
    }
    &:hover figcaption {
        transform:translate(-50%, -50%) rotate(0deg);
        opacity: 1;
    }
`;



const HoverBlock:React.SFC = () => {
    return(
        <Wrapper>
            <img src="https://user-images.githubusercontent.com/41350459/82142045-8c8e8480-9874-11ea-93f1-a20150d18f6d.jpg" alt="image3"/>
            <figcaption>
                <h3>Hover <em>Effect</em></h3>
            </figcaption>
        </Wrapper>
    );
}

export default HoverBlock;