import React, { Component } from 'react';
import '../../css/movies.css';
import { Link } from 'react-router-dom';

const SCOPE = process.env.PUBLIC_URL + "/movies";

class MovieTab extends Component {
    render(){
        var movies=""
        var add = ""
        var create = ""
        var graph = ""
        switch (this.props.subTab) {
            case "add":
                add = "active"
                break;
            case "create":
                create = "active"
                break;
            case "movies":
                movies = "active"
                break;
            case "graph":
                graph = "active"
                break;
            default:
        }

        return(
            <div>
                <div className="nav_split"><br/></div>
                <div className="sub_nav_bar">
                    <Link className={movies} to={SCOPE+"/list"}>Movies</Link>
                    <Link className={graph} to={SCOPE+"/graph"}>Graph</Link>
                    <Link className={add} to={SCOPE+"/add"}>Add Movie</Link>
                    <Link className={create} to={SCOPE+"/create"}>Create List</Link>
                </div>
            </div>
            
        );
    }
}

export default MovieTab;