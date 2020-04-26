import React, { Component } from 'react';
import '../css/style.css';
import NavBar from '../NavBar';
import ScrollUpButton from "react-scroll-up-button"

class Videos extends Component {
    render() {
        return(
            <div>
                <div class="header">
                    <h1>Videos</h1>
                </div>

                <p>Here are some videos to show you a little bit about myself!</p>

                <NavBar active="videos"/>


                <div class="content_grid">
                    <div class="content_holder span2r">
                        <video class="vid" controls>
                            <source src={require("../assets/video/IMG_1328.MOV")}/>
                        </video>
                    </div>

                    <div class="content_holder span3r">
                        <video class="vid" controls>
                            <source src={require("../assets/video/catsper.mp4")}/>
                        </video>
                    </div>
                    
                    <div class="content_holder">
                        <iframe class="vid" src="https://www.youtube.com/embed/P7817hJj2k0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div class="content_holder">
                        <iframe class="vid" src="https://www.youtube.com/embed/1K7291lKOgU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div class="content_holder">
                        <iframe class="vid" src="https://www.youtube.com/embed/M5uPENpAbl0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div class="content_holder span3r">
                        <video class="vid" controls>
                            <source src={require("../assets/video/spoider.mp4")}/>
                        </video>
                    </div>

                    <div class="content_holder span3r">
                        <video class="vid" controls>
                            <source src={require("../assets/video/facekick.mp4")}/>
                        </video>
                    </div>  
                </div>  

                <ScrollUpButton/>
                
            </div>
        );
  }
}

export default Videos;