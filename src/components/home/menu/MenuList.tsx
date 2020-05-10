/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import { STORES } from '../../../constants';
import BaseStore from '../../../stores/Base';

interface InjectedProps {
    [STORES.BASE_STORE] ?: BaseStore;
}

interface StyledProps {
    active: boolean;
}
const Wrapper = styled.div.attrs((props:StyledProps)=>({
    active: props.active || false,
    visibleHeight: props.active? "160px":"0",
    visiblePadding: props.active? "30px 0":"0",
}))`

    height: ${props=>props.visibleHeight};
    padding: ${props=>props.visiblePadding};
    transition: height 0.6s ease, padding 0.6s ease;
    overflow:hidden;

    & > div {
        float: left;
        width: 40%;
        & h3 {
            font-size: 18px;
            color: #25a2d0;
            font-weight: bold;
            margin-bottom: 4px;
        }

        & ol{
            overflow: hidden;   
        }
        & ol li{
            float: left;
            width: 50%;
            position: relative;
            padding-left: 8px;
            box-sizing: border-box;
            &:before {
                content: '';
                width: 3px;
                height: 3px;
                background-color: #25a2d0;
                border-radius: 50%;
                position: absolute; 
                left: 0; 
                top: 8px;
            }
            & a{
                position:relative;
                &:after{
                    content: '';
                    display: inline-block;
                    width: 0; 
                    height: 1px;
                    background:#25aad0;
                    transition: all 0.2s ease-in-out;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
                &:hover {
                    color:#25a2d0;
                    &:after{
                        width: 100%; 
                    }
                }
               
            }
            
            
        }
        &:last-child{
            width: 20%;
            & ol li{
                width: 100%;
            }
        }
    }       
`;
const MenuList: React.FC<InjectedProps> = (props) => {
    const baseStore = props[STORES.BASE_STORE] as BaseStore;
    return (
        <Wrapper active={baseStore.visibleMenu}>
            <div>
                <h3>HTML Reference</h3>
                <ol>
                    <li><a href='#'>HTML 태그(Tag)</a></li>
                    <li><a href="#">블록 요소/인라인 요소</a></li>
                    <li><a href="#">DTD 선언</a></li>
                    <li><a href="#">언어 속성 설정</a></li>
                    <li><a href="#">HTML {`<title>`}</a></li>
                    <li><a href="#">HTML {`<meta>`}</a></li>
                    <li><a href="#">특수문자</a></li>
                    <li><a href="#">하이퍼 링크</a></li>
                    <li><a href="#">HTML {`<style>`}</a></li>
                    <li><a href="#">HTML {`<html>`}</a></li>
                    <li><a href="#">HTML {`<head>`}</a></li>
                    <li><a href="#">HTML {`<div>`}</a></li>
                    <li><a href="#">HTML {`<colgroup>`}</a></li>
                    <li><a href="#">HTML {`<caption>`}</a></li>
                </ol>
            </div>
            <div>
                <h3>CSS  Reference</h3>
                <ol>
                    <li><a href="#">CSS 선택자</a></li>
                    <li><a href="#">CSS 단위</a></li>
                    <li><a href="#">CSS 색상</a></li>
                    <li><a href="#">CSS 선언 방법</a></li>
                    <li><a href="#">상대주소와 절대주소</a></li>
                    <li><a href="#">CSS float</a></li>
                    <li><a href="#">이미지 표현 방법</a></li>
                    <li><a href="#">이미지 스프라이트</a></li>
                    <li><a href="#">IR 효과</a></li>
                    <li><a href="#">이미지 최적화</a></li>
                    <li><a href="#">background-color</a></li>
                    <li><a href="#">border-style</a></li>
                    <li><a href="#">font-size</a></li>
                    <li><a href="#">text-align</a></li>
                </ol>
            </div>
            <div>
                <h3>Responsive</h3>
                <ol>
                    <li><a href="#">반응형사이트</a></li>
                    <li><a href="#">미디어쿼리</a></li>
                    <li><a href="#">CSS3</a></li>
                    <li><a href="#">웹 접근성 연구소</a></li>
                    <li><a href="#">네이버 널리</a></li>
                    <li><a href="#">다음 다룸</a></li>
                    <li><a href="#">Webstandard</a></li>
                </ol>
            </div>
        </Wrapper>
    )
}

export default inject(STORES.BASE_STORE)(observer(MenuList));