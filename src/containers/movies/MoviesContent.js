import React, { Component } from 'react';
import AddMovie from "./AddMovie"
import CreateList from "./CreateList"
import MovieList from './MovieList';
import Graph from './Graph';

import '../../css/style.css';

class MoviesContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.subTab) {
            case "add":
                return(
                    <AddMovie/>
                )
                break;            
            case "create":
                return(
                    <CreateList/>
                )
                break;
            case "graph":
                return(
                    <Graph/>
                )
            case "movies":
            default:
                return(
                    <MovieList/>
                )
            
        }

    };
  
}

export default MoviesContent;