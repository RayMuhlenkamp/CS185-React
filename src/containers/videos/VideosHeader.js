import React, { Component } from 'react';
import '../../css/style.css';

class VideosHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Videos</h1>
                </div>

                <p>Here are some videos to show you a little bit about myself!</p>
            </div>
        );
  }
}

export default VideosHeader;