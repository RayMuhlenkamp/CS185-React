import React, { Component } from 'react';
import '../../css/style.css';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Welcome to My Portfolio</h1>
                </div>

                <p>
                    Enjoy your stay!
                </p>
            </div>
        );
  }
}

export default HomeHeader;