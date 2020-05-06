import { css, CSSProp } from 'styled-components';

interface MediaSize {
    desktop: number,
    tablet: number,
    mobile: number,
}

interface Media {
    desktop: (...args: Array<string>) => CSSProp | undefined;
    tablet: (...args: Array<string>) => CSSProp | undefined;
    mobile: (...args: Array<string>) => CSSProp | undefined;
}

interface InjectedThemeProps {
    media: Media;    
}

const sizes: MediaSize = {
    desktop: 1220,
    tablet: 768,
    mobile: 360,
}



const media: Media = {
    desktop: (...args) => css`@media only screen and (max-width: ${sizes['desktop']}px) {
        ${args}
    }`,
    tablet: (...args) => css`@media only screen and (max-width: ${sizes['tablet']}px){
        ${args}
    }`,
    mobile: (...args) => css`@media only screen and (max-width: ${sizes['mobile']}px) {
        ${args}
    }`
};

const themes:InjectedThemeProps = {
    media
}

export default themes;