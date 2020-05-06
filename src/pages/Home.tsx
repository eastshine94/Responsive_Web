import React, { Component } from 'react';
import { Header, Menu, SubTitle, Contents, Footer } from '../containers/home';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
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