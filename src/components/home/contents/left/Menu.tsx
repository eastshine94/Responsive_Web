import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
    padding: 15px;
    border-bottom: 1px solid #dbdbdb;
`;

const Menu:React.SFC = () => {
    return(
        <Wrapper>
            <h4>반응형 사이트 왼쪽컨텐츠1</h4>
        </Wrapper>
    );
}

export default Menu;