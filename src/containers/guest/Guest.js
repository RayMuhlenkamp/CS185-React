import React, { Component } from 'react';
import GuestHeader from "./GuestHeader";
import TabList from '../../TabList';
import GuestContent from './GuestContent';

class Guest extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: "guest"};
    }

    render() {
        return(     
            <div>
                <GuestHeader/>
                <TabList activeTab={this.state.activeTab}/>
                <GuestContent/>
            </div>
        );
  }
}

export default Guest;