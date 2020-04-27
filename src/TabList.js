import React, { Component } from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';

// Note for instructors: I am not creating Tab components, as it was much 
// more streamlined to just have them be individual Link components,
// since I am using React Router for my page loading/management. 
// If this is an issue I can always create a wrapper Tab component and pass
// in the props as neccessary, but I feel like that is overengineering it
// for my setup. 
class TabList extends Component {
    render(){
        var home=""
        var images="" 
        var videos=""
        var playlists=""
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
            default:
        }

        return(
            <div className="nav_bar">
                <Link className={home} to="/cs185-react/">Home</Link>
                <Link className={images} to="/cs185-react/images">Images</Link>
                <Link className={videos} to="/cs185-react/videos">Videos</Link>
                <Link className={playlists} to="/cs185-react/playlists">Playlists</Link>
            </div>
        );
    }
}

export default TabList;