import React, { Component } from 'react';
import '../../css/style.css';

class ImagesHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Images</h1>
                </div>

                <p>Here are some images to show you a little bit about myself!</p>
            </div>
        );
  }
}

export default ImagesHeader;