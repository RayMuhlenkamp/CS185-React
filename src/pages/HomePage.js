import React, { Component } from 'react';
import '../css/style.css';
import images from "../assets/assets"

class HomePage extends Component {
    render() {
        return(
            
            <div>
                <div className="header">
                    <h1>Welcome to my portfolio</h1>
                </div>

                <div className="nav_bar">
                    <a className="active" href="index.html">Home</a>
                    <a href="images.html">Images</a>
                    <a href="videos.html">Videos</a>
                    <a href="playlists.html">Playlists</a>
                </div>

                <div className="main_body">  
                    <div>
                        {images[7]}
                    </div>

                    <div>
                        <p>
                            Hello! Welcome to my portfolio website. 
                            My name is Ray Muhlenkamp. I am a student at the University of California, Santa Barbara, studying Computer Science and German. 
                            I play bass in a band called Careless Cub, love to play soccer, and am a big fan of most things I do. 
                            I hope you enjoy your stay!
                        </p>
                    </div>
                </div>
            </div>
        );
  }
}

export default HomePage;