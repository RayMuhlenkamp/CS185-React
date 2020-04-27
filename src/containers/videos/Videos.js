import React, { Component } from 'react';
import TabList from '../../TabList';
import ScrollUpButton from "react-scroll-up-button"
import VideosHeader from './VideosHeader';
import VideosContent from "./VideosContent";

class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: "videos"};
    }

    render() {
        return(
            <div>
                <VideosHeader/>
                <TabList activeTab={this.state.activeTab} />  
                <VideosContent/>
                <ScrollUpButton/> 
            </div>
        );
  }
}

export default Videos;