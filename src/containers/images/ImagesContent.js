import React, { Component } from 'react';
import '../../css/style.css';
import images from "../../assets/assets"
import { SRLWrapper } from "simple-react-lightbox";

class ImagesContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <SRLWrapper>
                    <div className="content_grid">
                        <div className="content_holder">
                            {images[0]}     
                        </div>

                        <div className="content_holder">
                            {images[1]}
                        </div>

                        <div className="content_holder">
                            {images[2]}     
                        </div>

                        <div className="content_holder bg_green">
                            {images[12]}
                        </div>
                        
                        <div className="content_holder bg_green">
                            {images[13]}      
                        </div>

                        <div className="content_holder bg_green">
                            {images[14]}      
                        </div>
                        
                        <div className="content_holder span2c">
                            {images[3]}      
                        </div>
                        
                        <div className="content_holder ">
                            {images[5]}                    
                        </div>

                        <div className="content_holder span2c">
                            {images[4]}        
                        </div>

                        <div className="content_holder">
                            {images[8]}      
                        </div>

                        <div className="content_holder">
                            {images[9]}      
                        </div>

                        <div className="content_holder">
                            {images[10]}      
                        </div>

                        <div className="content_holder span2c">
                            {images[11]}      
                        </div>

                        <div className="content_holder">
                            {images[6]}      
                        </div>
                    </div>
                </SRLWrapper>
            </div>
        );
  }
}

export default ImagesContent;