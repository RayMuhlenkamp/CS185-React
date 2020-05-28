import React, { Component } from 'react';
import MoviesHeader from "./MoviesHeader"
import TabList from '../../TabList';
import ScrollUpButton from "react-scroll-up-button"
import MoviesContent from './MoviesContent';
import MovieTab from './MovieTabs';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: "movies"};
        console.log(this.props.subTab)
    }

    componentDidMount() {
        this.setState(() => {
            return {subTab: this.props.subTab };
        });  
    }

    render() {
        return(
            <div>
                <MoviesHeader subTab={this.props.subTab} />
                <TabList activeTab={this.state.activeTab} />
                <MovieTab subTab ={this.props.subTab} />
                <MoviesContent subTab={this.props.subTab} />
                <ScrollUpButton/>
            </div>
        );
  }
}

export default Movies;