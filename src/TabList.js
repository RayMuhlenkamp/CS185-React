import React, { Component } from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';

const SCOPE = process.env.PUBLIC_URL;

class TabList extends Component {
    render(){
        var home=""
        var images="" 
        var videos=""
        var playlists=""
        var guest=""
        var movies=""
        switch (this.props.activeTab) {
            case "home":
                home = "active"
                break;
            case "images":
                images = "active"
                break;
            case "videos":
                videos = "active"
                break;
            case "playlists":
                playlists = "active"
                break;
            case "guest":
                guest = "active"
                break;
            case "movies":
                movies = "active"
                break;
            default:
        }

        return(
            <div className="nav_bar">
                <Link className={home} to={SCOPE+"/"}>Home</Link>
                <Link className={images} to={SCOPE+"/images"}>Images</Link>
                <Link className={videos} to={SCOPE+"/videos"}>Videos</Link>
                <Link className={playlists} to={SCOPE+"/playlists"}>Playlists</Link>
                <Link className={guest} to={SCOPE+"/guest_book"}>Guest Book</Link>
                <Link className={movies} to={SCOPE+"/movies"}>Movies</Link>
            </div>
        );
    }
}

export default TabList;