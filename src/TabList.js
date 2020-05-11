import React, { Component } from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';

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
                <Link className={home} to="/cs185-react/">Home</Link>
                <Link className={images} to="/cs185-react/images">Images</Link>
                <Link className={videos} to="/cs185-react/videos">Videos</Link>
                <Link className={playlists} to="/cs185-react/playlists">Playlists</Link>
                <Link className={guest} to="/cs185-react/guest_book">Guest Book</Link>
                <Link className={movies} to="/cs185-react/movies">Movies</Link>
            </div>
        );
    }
}

export default TabList;