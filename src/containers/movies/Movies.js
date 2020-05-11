import React, { Component } from 'react';
import MoviesHeader from "./MoviesHeader"
import TabList from '../../TabList';
import ScrollUpButton from "react-scroll-up-button"
import MoviesContent from './MoviesContent';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: "movies"};
    }

    render() {
        return(
            <div>
                <MoviesHeader/>
                <TabList activeTab={this.state.activeTab} />
                <MoviesContent/>
                <ScrollUpButton/>
            </div>
        );
  }
}

export default Movies;