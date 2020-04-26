import React, { Component } from 'react';
import '../css/style.css';
import images from "../assets/assets"
import NavBar from "../NavBar"
import ScrollUpButton from "react-scroll-up-button"

class ImagesPage extends Component {
    render() {
        return(
            <body className="page" onLoad="loadPage()">

                <div className="header">
                    <h1>Images</h1>
                </div>

                <p>Here are some images to show you a little bit about myself!</p>

                <NavBar active="images" />


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

                <div id="myImgModal" className="modal">
                    <span onClick="closeModal()" className="close">&times;</span>
                    <img className="modalContent" id="modalImg"/>
                </div>

                <ScrollUpButton/>

            </body>
        );
  }
}

export default ImagesPage;