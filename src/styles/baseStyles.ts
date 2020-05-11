import styled from 'styled-components';

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    ${({theme})=>theme.media.W1220`
        width: 100%;
    `}
`;

