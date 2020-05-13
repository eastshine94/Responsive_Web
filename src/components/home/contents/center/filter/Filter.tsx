import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';

const Wrapper = styled(BlockWrapper)`
    
`;

const Filter:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Filter" col_desc="이 곳은 설명 부분입니다.">
                <div></div>
            </BlockFrame>
        </Wrapper>
    );
}

export default Filter;