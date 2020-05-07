import React, { Component } from 'react';
import '../../css/style.css';

class GuestHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Guest Book</h1>
                </div>

                <p>
                    Welcome to the guest book! Feel free to leave a message for me.
                </p>
            </div>
        );
  }
}

export default GuestHeader;