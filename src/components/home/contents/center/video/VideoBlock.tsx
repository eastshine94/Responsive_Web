import React from 'react';
import styled from 'styled-components';
import BlockFrame, { BlockWrapper } from '../../frame/BlockFrame';


const Wrapper = styled(BlockWrapper)`
    border: 0;
`;
const VideoWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 60%;
    & iframe{
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

const VideoBlock:React.SFC = () => {
    return(
        <Wrapper>
            <BlockFrame col_title="Video" col_desc="반응형 영상을 보여주는 영역입니다.">
                <VideoWrapper>
                    <iframe title="youtube" src="https://www.youtube.com/embed/52TT7SLexxE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}/>
                </VideoWrapper>
            </BlockFrame>
        </Wrapper>
    );
}

export default VideoBlock;