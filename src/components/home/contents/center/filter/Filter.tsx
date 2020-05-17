import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import Square from './Square';

const Wrapper = styled(BlockWrapper)`
    
`;

const Filter:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Filter Effect" col_desc="CSS3에서 제공하는 Background-blend-mode, mix-blend-mode, filter 효과입니다.">
                <Square/>
            </BlockFrame>
        </Wrapper>
    );
}

export default Filter;