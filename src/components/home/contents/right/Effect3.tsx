import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../frame/BlockFrame';
const Wrapper = styled( BlockWrapper )`
    border:0;
`;

const Effect3:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Effect3" col_desc="이 곳은 설명 부분입니다.">
                <div></div>
            </BlockFrame>
        </Wrapper>
    );
}

export default Effect3;