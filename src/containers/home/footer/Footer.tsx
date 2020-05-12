import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../styles/baseStyles';

const Wrapper = styled.footer`
    border-top: 1px solid #dbdbdb;
`;
const Footer: React.SFC = () => {
    return (
        <Wrapper>
            <Container>
                <h2>반응형 사이트 푸터</h2>
            </Container>
        </Wrapper>
    )
}

export default Footer;