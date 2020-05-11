/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {MouseEvent} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    margin: 40px 0 45px 0;
    & li{
        display: inline;
        margin: 0 4px;

        & a {
            display: inline-block;
            background-color: #3192bf;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            color: #fff;
            font-size: 35px;
            line-height: 60px;
            position: relative;
            transition: all 0.3s ease;
            &:hover {
                box-shadow: 0 0 0 3px rgba(75,154,191,0.9) inset,
                0 0 0 100px rgba(0, 0, 0, 0.1) inset;
            }
            &:hover span{
                opacity: 1;
                top: -33px;
            }
            & span{
                position: absolute;
                left: 50%;
                top: -40px;
                transform: translate(-50%);
                font-size: 12px;
                line-height: 1.6;
                background: #3192bf;
                padding: 3px 9px;
                border-radius: 6px 0;
                opacity: 0;
                transition: all 0.3s ease;
                &:before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: -5px;
                    border-top: 5px solid #3192bf;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                }
            }
        }
    }
`;



const HeaderIcon:React.SFC = () => {
    //http://www.facebook.com/sharer.php?u={페이지 제목}&t={페이지링크}
    //http://twitter.com/intent/tweet?text={페이지 제목}&url={페이지링크}
    //https://share.naver.com/web/shareView.nhn?url={페이지링크}&title={페이지 제목}
    //https://plus.google.com/share?url={페이지링크}&t={페이지 제목}
    const onFacebook = (e:MouseEvent) => {
        e.preventDefault();
        window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
    }
    const onTwitter = (e:MouseEvent) => {
        e.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
    }

    
    return(
        <Wrapper>
            <ul>
                <li><a href="https://velog.io/@eastshine94"><i className="fa fa-blog" aria-hidden="true"></i><span>Blog</span></a></li>
                <li><a href="https://github.com/eastshine94"><i className="fab fa-github" aria-hidden="true"></i><span>Github</span></a></li>
                <li><a href="#" onClick={onFacebook}><i className="fab fa-facebook-square" aria-hidden="true"></i><span>Facebook</span></a></li>
                <li><a href="#" onClick={onTwitter}><i className="fab fa-twitter" aria-hidden="true"></i><span>twitter</span></a></li>
            </ul>
        </Wrapper>
    );
}

export default HeaderIcon;