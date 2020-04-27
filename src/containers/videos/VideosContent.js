import React, { Component } from 'react';
import '../../css/style.css';

class VideosContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="content_grid">
                <div className="content_holder span2r">
                    <video className="vid" controls>
                        <source src={require("../../assets/video/IMG_1328.MOV")}/>
                    </video>
                </div>

                <div className="content_holder span3r">
                    <video className="vid" controls>
                        <source src={require("../../assets/video/catsper.mp4")}/>
                    </video>
                </div>
                
                <div className="content_holder">
                    <iframe className="vid" src="https://www.youtube.com/embed/P7817hJj2k0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className="content_holder">
                    <iframe className="vid" src="https://www.youtube.com/embed/1K7291lKOgU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className="content_holder">
                    <iframe className="vid" src="https://www.youtube.com/embed/M5uPENpAbl0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className="content_holder span3r">
                    <video className="vid" controls>
                        <source src={require("../../assets/video/spoider.mp4")}/>
                    </video>
                </div>

                <div className="content_holder span3r">
                    <video className="vid" controls>
                        <source src={require("../../assets/video/facekick.mp4")}/>
                    </video>
                </div>  
            </div>
        );
  }
}

export default VideosContent;