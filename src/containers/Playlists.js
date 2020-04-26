import React, { Component } from 'react';
import '../css/style.css';
import NavBar from '../NavBar';
import ScrollUpButton from "react-scroll-up-button"

class Playlists extends Component {
    render() {
        return(
            <div>
                <div className="header">
                    <h1>Playlists</h1>
                </div>

                <p>
                    Here are some of my favorite music playlists, for your listening pleasure!
                </p>

                <NavBar active="playlists"/>

                <div className="content_grid">
                    <div className="content_holder">
                        <iframe className="playlist" src="https://open.spotify.com/embed/playlist/5Uhlzklmcnl8jRYh7cxdgX" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>

                    <div className="content_holder">
                        <iframe className="playlist" src="https://open.spotify.com/embed/playlist/78KwttLhfegWgn3AwxxgEE" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>    
                    </div>

                    <div className="content_holder">
                        <iframe className="playlist" src="https://open.spotify.com/embed/playlist/52dhfbnG3iKesB3pjJJNmr" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>    
                    </div>

                    <div className="content_holder">
                        <iframe className="playlist" src="https://open.spotify.com/embed/playlist/3t6OGkyJEFLJMW3pLbtde8" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>    
                    </div>

                    <div className="content_holder">
                        <iframe className="playlist" src="https://open.spotify.com/embed/playlist/56qSt2tlxP25Chg3jMF5dD" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>        
                    </div>

                    <div className="content_holder">
                        <iframe className="playlist" src="https://open.spotify.com/embed/playlist/5hk1HuLPZrrYK5jQRCBtiW" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>        
                    </div>

                    <div className="content_holder">
                        <iframe className="playlist" src="https://open.spotify.com/embed/playlist/3ccZZQRqBzg1AWfK248Bzr" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>        
                    </div>
                </div>

                <ScrollUpButton/>
                
            </div>
        );
  }
}

export default Playlists;