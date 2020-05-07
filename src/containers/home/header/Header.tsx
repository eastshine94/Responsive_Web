import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../styles/baseStyles';
import {HeaderMenu, HeaderTitle, HeaderIcon} from '../../../components/home/header';

const Wrapper = styled.header`
    height:327px;
    background: url("https://user-images.githubusercontent.com/41350459/81177162-305c7280-8fe1-11ea-9704-849b5c6511b2.jpg") repeat-x center top;
`;

const Header: React.SFC = () => {
    return (
        <Wrapper>
            <Container>
                <HeaderMenu/>
                <HeaderTitle/>
                <HeaderIcon/>
            </Container>
        </Wrapper>
    )
}

export default Header;