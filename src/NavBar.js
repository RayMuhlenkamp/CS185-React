import React, { Component } from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render(){
        var home=""
        var images="" 
        var videos=""
        var playlists=""
        switch (this.props.active) {
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
            default:
        }

        return(
            <div className="nav_bar">
                <Link className={home} to="/">Home</Link>
                <Link className={images} to="/images">Images</Link>
                <Link className={videos} to="/videos">Videos</Link>
                <Link className={playlists} to="/playlists">Playlists</Link>
            </div>
        );
    }


    OLDrender() {
        switch (this.props.active) {
            case "home":
                return(
                    <div className="nav_bar">
                        <a className="active" href="/">Home</a>
                        <a href="/images">Images</a>
                        <a href="/videos">Videos</a>
                        <a href="/playlists">Playlists</a>
                    </div>
                );
            case "images":
                return(
                    <div className="nav_bar">
                        <a href="/">Home</a>
                        <a className="active" href="images.html">Images</a>
                        <a href="videos.html">Videos</a>
                        <a href="playlists.html">Playlists</a>
                    </div>
                );
            case "videos":
                return(
                    <div className="nav_bar">
                        <a href="/">Home</a>
                        <a href="images.html">Images</a>
                        <a className="active" href="videos.html">Videos</a>
                        <a href="playlists.html">Playlists</a>
                    </div>
                );
            case "playlists":
                return(
                    <div className="nav_bar">
                        <a href="/">Home</a>
                        <a href="images.html">Images</a>
                        <a href="videos.html">Videos</a>
                        <a className="active" href="playlists.html">Playlists</a>
                    </div>
                );
            default:
                return(
                    <div className="nav_bar">
                        <a href="/">Home</a>
                        <a href="images.html">Images</a>
                        <a href="videos.html">Videos</a>
                        <a href="playlists.html">Playlists</a>
                    </div>
                );
        }
        
  }
}

export default NavBar;