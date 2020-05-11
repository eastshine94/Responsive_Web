import { css, CSSProp } from 'styled-components';

interface MediaSize {
    W1220: number,
    W1024: number,
    W960: number,
    W768: number,
    W600: number,
    W480: number,
    W320: number,
}

interface Media {
    W1220: (...args: Array<string>) => CSSProp | undefined;
    W1024: (...args: Array<string>) => CSSProp | undefined;
    W960: (...args: Array<string>) => CSSProp | undefined;
    W768: (...args: Array<string>) => CSSProp | undefined;
    W600: (...args: Array<string>) => CSSProp | undefined;
    W480: (...args: Array<string>) => CSSProp | undefined;
    W320: (...args: Array<string>) => CSSProp | undefined;
}

interface InjectedThemeProps {
    media: Media;    
}

const sizes: MediaSize = {
    W1220: 1220,
    W1024: 768,
    W960: 960,
    W768: 768,
    W600: 600,
    W480: 480,
    W320: 320,
};




const media: Media = {
    W1220: (...args) => css`@media only screen and (max-width: ${sizes['W1220']}px) {
        ${args}
    }`,
    W1024: (...args) => css`@media only screen and (max-width: ${sizes['W1024']}px){
        ${args}
    }`,
    W960: (...args) => css`@media only screen and (max-width: ${sizes['W960']}px) {
        ${args}
    }`,
    W768: (...args) => css`@media only screen and (max-width: ${sizes['W768']}px) {
        ${args}
    }`,
    W600: (...args) => css`@media only screen and (max-width: ${sizes['W600']}px) {
        ${args}
    }`,
    W480: (...args) => css`@media only screen and (max-width: ${sizes['W480']}px) {
        ${args}
    }`,
    W320: (...args) => css`@media only screen and (max-width: ${sizes['W320']}px) {
        ${args}
    }`
};

const themes:InjectedThemeProps = {
    media
}

export default themes;