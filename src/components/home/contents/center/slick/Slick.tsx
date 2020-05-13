import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import mediaSize from '../../../../../styles/mediaSize';
const Wrapper = styled(BlockWrapper)`
    @media only screen and (max-width:${mediaSize.W768}){
        border-top: 1px solid #dbdbdb;
    }
`;

const Slick:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Slick" col_desc="이 곳은 설명 부분입니다.">
                <div></div>
            </BlockFrame>
        </Wrapper>
    );
}

export default Slick;