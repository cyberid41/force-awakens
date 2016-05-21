import React, { Component } from 'react';
import HomeContainer from '../containers/HomeContainer';
import ParallaxHome from '../components/ParallaxHome';

class Home extends Component {
    render() {
        return (
            <div>
                <ParallaxHome/>
                <HomeContainer />
            </div>
        );
    }
}


export default Home;