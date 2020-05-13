import React from 'react';
import styled from 'styled-components';
import { SU } from '../../../../../styles/IR';

const Wrapper = styled.div`
    img{
        width: 100%;
    }
    & .img-retina{
        display: none;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
            only screen and (min-device-pixel-ratio: 1.5),
            only screen and (min-resolution: 1.5dppx) {
                .img-retina {display: initial;}
                .img-normal {display: none;}
    }
    
`;


const ImageBlock1: React.SFC = () => {
    return(
        <Wrapper>
            <h5><SU>Image1</SU></h5>
            <figure>
                <img className="img-normal" src="https://user-images.githubusercontent.com/41350459/81804950-fba66900-9554-11ea-9c63-fe4493fd1eff.jpg" alt="normal_image"/>
                <img className="img-retina" src="https://user-images.githubusercontent.com/41350459/81805083-36a89c80-9555-11ea-923b-e769f453a992.jpg" alt="retina_image" width="100%"/>
                <figcaption>반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다. </figcaption>
            </figure>
        </Wrapper>
    );
}

export default ImageBlock1;