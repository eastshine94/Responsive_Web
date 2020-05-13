import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';
import MenuList from './MenuList';
import mediaSize from '../../../../../styles/mediaSize';
const Wrapper = styled(BlockWrapper)`
    padding: 15px;
    @media only screen and (max-width:${mediaSize.W600}){
        padding: 0;
        border-bottom: 0;
        
        & h4{
            display: none;
        }
        & p{
            display: none;
        }
    }
`;

const Menu:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Menu" col_desc="box-shadow를 이용한 마우스 오버 효과입니다.">
                <MenuList/>
            </BlockFrame>
        </Wrapper>
    );
}

export default Menu;