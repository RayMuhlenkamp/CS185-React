import React, { Component } from 'react';
import HomeHeader from "./HomeHeader";
import TabList from '../../TabList';
import HomeContent from './HomeContent';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: "home"};
    }

    render() {
        return(     
            <div>
                <HomeHeader/>
                <TabList activeTab={this.state.activeTab}/>
                <HomeContent/>
            </div>
        );
  }
}

export default Home;