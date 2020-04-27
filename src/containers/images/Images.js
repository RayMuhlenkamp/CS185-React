import React, { Component } from 'react';
import ImagesHeader from "./ImagesHeader"
import TabList from "../../TabList"
import ImagesContent from "./ImagesContent"
import ScrollUpButton from "react-scroll-up-button"

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: "images"};
    }

    render() {
        return(
            <div>
                <ImagesHeader />
                <TabList activeTab={this.state.activeTab} />
                <ImagesContent />
                <ScrollUpButton/>
            </div>
        );
  }
}

export default Images;