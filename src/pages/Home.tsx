import React, { Component } from 'react';
import { Header, Menu, SubTitle, Contents, Footer } from '../containers/home';
import {createGlobalStyle} from 'styled-components';

const BodyStyle = createGlobalStyle`
    body{
        background: url("https://user-images.githubusercontent.com/41350459/81177162-305c7280-8fe1-11ea-9704-849b5c6511b2.jpg") repeat-x center top;
    }
`;


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <BodyStyle/>
                <Header/>
                <Menu/>
                <SubTitle/>
                <Contents/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;