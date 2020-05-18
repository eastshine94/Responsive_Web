import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import HoverBlock from './HoverBlock';

const Wrapper = styled(BlockWrapper)`
    border:0;
`;

const Effect3: React.SFC = () => {
    return (
        <Wrapper>
            <BlockFrame col_title="Effect3" col_desc="CSS3의 transform을 이용한 마우스 오버 효과입니다.">
                <HoverBlock/>
            </BlockFrame>
        </Wrapper>
    );
}

export default Effect3;