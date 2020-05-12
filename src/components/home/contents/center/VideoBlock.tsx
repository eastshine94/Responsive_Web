import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
    padding: 15px;
`;

const VideoBlock:React.SFC = () => {
    return(
        <Wrapper>
             <h4>반응형 사이트 가운데 컨텐츠3</h4>
        </Wrapper>
    );
}

export default VideoBlock;