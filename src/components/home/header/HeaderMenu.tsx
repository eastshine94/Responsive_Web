import React from 'react';
import styled from 'styled-components';
import mediaSize from '../../../styles/mediaSize';
const Wrapper = styled.div`
    
    text-align: right;
    & a{
        color: #fff;
        padding: 8px 0 6px 10px;
        display: inline-block;
        transition: color 0.3s ease;
        font-family: 'Abel', sans-serif;

        &:hover {
            color: #ccc;
        }
        @media only screen and (max-width: ${mediaSize.W1220}){
            padding-right: 15px;
        }
    }
`;

const HeaderMenu: React.SFC = () => {
    return (
        <Wrapper>
            <a href="https://velog.io/@eastshine94">Blog</a>
            <a href="https://github.com/eastshine94">Github</a>
            <a href="https://eastshine94.github.io/WebStandard_with_StyledComponent/">WebStandard</a>
        </Wrapper>
    );
}

export default HeaderMenu;