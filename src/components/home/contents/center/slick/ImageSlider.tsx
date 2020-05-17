import React from 'react';
import Slider, { Settings } from "react-slick";
import styled from 'styled-components';
import mediaSize from '../../../../../styles/mediaSize';
const Wrapper = styled.div`
    & .slick-slider{
        overflow: hidden;
        position: relative;
    }
    
    & .slick-track {
        display: flex;
        justify-content: space-between;
        
    }
    & .slick-active{
        & figcaption em, span{
            opacity: 1;
            transform: translateX(0);
        }
    }
    & .slick-dots {
        display: block;
        width: 100%;
        text-align: center;
        & li{
            display: inline-block;
            width: 15px;
            height: 15px;
            margin: 5px;
            & button{
                font-size: 0;
                line-height: 0;
                display: block;
                width: 15px;
                height: 15px;
                cursor: pointer;
                background: #5dbfed;
                border-radius: 50%;
            }
        }
        
        & .slick-active{
            & button{
                background: #2980b9;
            } 
        }
    }
    & .slick-prev{
        position: absolute;
        display: inline-block;
        left: 0;
        bottom: 0;
        z-index: 1000;
        width: 30px;
        height: 25px;
        text-indent: -9999px;
        &::before{ 
            content: '\f053';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            color: #5dbfeb;
            text-indent: 0;
            position: absolute;
            left: 9px;
            top: 6px;
        }
    }
    & .slick-next{
        position: absolute;
        display: inline-block;
        right: 0;
        bottom: 0;
        z-index: 1000;
        width: 30px;
        height: 25px;
        text-indent: -9999px;
        &::before{
            content:"\f054";
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            color: #5dbfeb;
            text-indent: 0;
            position: absolute;
            left: 11px;
            top: 6px;
        }
    }
    & figure {
        position: relative;
        & img{
            width: 100%;
            height: 333px;
        }   
    }
    & figcaption{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        background: rgba(0,0,0,0.8);
        color: #fff;
        font-size: 18px;
        
        & em {
            display: block;
            font-weight: bold;
            font-size: 28px;
            text-transform: uppercase;
            font-family: 'Abel', sans-serif;
            opacity: 0;
            transition: all 0.84s ease;
            transform: translateX(50px);
        }
        & span{
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            opacity: 0;
            transition: all 0.84s 0.2s ease;
            transform: translateX(50px);
        }
    }
    @media only screen and (max-width:${mediaSize.W768}){
        & figcaption{
            padding: 10px;

            & em {
                font-size: 18px;
            }
            & span{
                font-size: 14px;
            }
        }
        & figure {
            & img{
                height: 300px;
            }   
        }
    }

`;
const ImageSlider: React.SFC = () => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        
    }
    return (
        <Wrapper>
            <Slider {...settings}>
                <div>
                    <figure>
                        <img src="https://user-images.githubusercontent.com/41350459/82121663-bc348280-97c9-11ea-8781-a61dd627523b.jpg" alt="image1" />
                        <figcaption>
                            <em>Responsive Site1</em>
                            <span>슬라이드 플러그인을 이용한 반응형 이미지 슬라이드입니다.</span>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src="https://user-images.githubusercontent.com/41350459/82122398-70d0a300-97ce-11ea-8755-d02642bcb3fa.jpg" alt="image2" />
                        <figcaption>
                            <em>Responsive Site2</em>
                            <span>슬라이드 플러그인을 이용한 반응형 이미지 슬라이드입니다.</span>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    
                    <figure>
                        <img src="https://user-images.githubusercontent.com/41350459/82122403-73cb9380-97ce-11ea-8883-5e8ea759ca0e.jpg" alt="image3" /> 
                        <figcaption>
                            <em>Responsive Site3</em>
                            <span>슬라이드 플러그인을 이용한 반응형 이미지 슬라이드입니다.</span>
                        </figcaption>
                    </figure>
                </div>
            </Slider>
        </Wrapper>
    );
}

export default ImageSlider;