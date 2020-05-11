import React, { Component } from 'react';
import '../../css/style.css';

class MoviesHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Movies</h1>
                </div>
                <p>
                    Here are some of my favorite films; take a look and see which ones you have seen before!
                </p>
            </div>
        );
  }
}

export default MoviesHeader;