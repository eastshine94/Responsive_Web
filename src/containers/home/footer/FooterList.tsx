/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    padding: 30px 50px;
    & li {
        display: inline;
        padding: 0 7px 0 10px;
        white-space: nowrap;
        position: relative; 
        &::before {
            content: '';
            width: 1px;
            height: 14px;
            background-color: #dbdbdb;
            position: absolute;
            top: 0;
            left: 3px;
        }
        &:first-child:before{
            width: 0;
        }
    }
    & address{
        padding-top: 15px;
    }
`;

const FooterList:React.SFC = () => {
    return(
        <Wrapper>
            <ul>
                <li><a href="#">사이트 도움말</a></li>
                <li><a href="#">사이트 이용약관</a></li>
                <li><a href="#">사이트 운영원칙</a></li>
                <li><a href="#"><strong>개인정보취급방침</strong></a></li>
                <li><a href="#">책임의 한계와 법적고지</a></li>
                <li><a href="#">게시중단요청서비스</a></li>
                <li><a href="#">고객센터</a></li>
            </ul>
            <address>
                {`Copyright © `}
                <a href="https://github.com/eastshine94"><strong>Eastshine94</strong></a>
                {` All Rights Reserved.`}
            </address>
        </Wrapper>
    );
}

export default FooterList;