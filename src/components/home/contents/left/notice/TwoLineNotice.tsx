import React from 'react';
import styled from 'styled-components';
import More from './More';
const Wrapper = styled.div`
    position: relative;
    margin-top: 15px;
    & h5 {
        font-size: 14px;
        color: #2f7fa6;
        padding-bottom: 5px;
    }
    & li{
        position: relative;
        padding-left: 8px;
        padding-bottom: 3px;
        overflow: hidden;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        
        /* internet explorer를 위해 */
        max-height: 40px;
        &:before{
            content: '';
            width: 3px;
            height: 3px;
            background: #449ce2;
            border-radius: 50%;
            position: absolute;
            top: 8px;
            left: 0;
        }
    }
`;

const TwoLineNotice: React.SFC = () => {
    return(
        <Wrapper>
            <h5>Notice2</h5>
            <ul>
                <li>이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다.</li>
                <li>이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다.</li>
                <li>이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다.</li>
                <li>이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다.</li>
            </ul>
            <More/>
        </Wrapper>
    );
};

export default TwoLineNotice;

