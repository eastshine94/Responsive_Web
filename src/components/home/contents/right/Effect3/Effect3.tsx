import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import ImageStyle from '../ImageStyle';
import mediaSize from '../../../../../styles/mediaSize';
const Wrapper = styled(BlockWrapper)`
    border:0;
`;

const Effect3: React.SFC = () => {
    return (
        <Wrapper>
            <BlockFrame col_title="Effect3" col_desc="CSS3의 transform을 이용한 마우스 오버 효과입니다.">
                <ImageStyle>
                    <img src="https://user-images.githubusercontent.com/41350459/82142045-8c8e8480-9874-11ea-93f1-a20150d18f6d.jpg" alt="image3"/>
                </ImageStyle>
            </BlockFrame>
        </Wrapper>
    );
}

export default Effect3;