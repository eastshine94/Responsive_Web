import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import mediaSize from '../../../../../styles/mediaSize';
import OneLineNotice from './OneLineNotice';
import TwoLineNotice from './TwoLineNotice';

const Wrapper = styled(BlockWrapper)`

    @media only screen and (max-width:${mediaSize.W600}){
        background: #fff;
    }
`;

const Notice:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Notice" col_desc="게시판 영역의 한줄 효과와 두줄 효과 게시판입니다.">
                <React.Fragment>
                    <OneLineNotice/>
                    <TwoLineNotice/>
                </React.Fragment>
            </BlockFrame>
        </Wrapper>
    );
}

export default Notice;