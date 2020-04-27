import React, { Component } from 'react';
import PlaylistsHeader from "./PlaylistsHeader"
import TabList from '../../TabList';
import ScrollUpButton from "react-scroll-up-button"
import PlaylistsContent from './PlaylistsContent';


class Playlists extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: "playlists"};
    }

    render() {
        return(
            <div>
                <PlaylistsHeader/>
                <TabList activeTab={this.state.activeTab} />
                <PlaylistsContent/>
                <ScrollUpButton/>
            </div>
        );
  }
}

export default Playlists;