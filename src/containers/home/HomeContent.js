import React, { Component } from 'react';
import '../../css/style.css';

class HomeContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="main_body">  
                <div>
                    <img src={require("../../assets/image/ray_linkedin.jpg")} />
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
        );
  }
}

export default HomeContent;