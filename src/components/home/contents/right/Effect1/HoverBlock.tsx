import React from 'react';
import styled from 'styled-components';
import ImageStyle from '../ImageStyle';

const Front = styled(ImageStyle)`
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
    
`;
const Back = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform-style: preserve-3d;
    color: #fff;
    background: #4038dc;
    transform: rotateY(-180deg);
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
    & i {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 60px;
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
`;


const HoverBlock:React.SFC = () => {
    return(
        <Wrapper>
            <Front>
                <img src="https://user-images.githubusercontent.com/41350459/82142041-8b5d5780-9874-11ea-8b5e-8184339c4b12.jpg" alt="image1"/>
            </Front>
            <Back>
                <i className="fa fa-heart"/>
            </Back>
        </Wrapper>
    );
}

export default HoverBlock;