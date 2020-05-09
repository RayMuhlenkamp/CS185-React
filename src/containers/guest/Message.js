import React, { Component } from 'react';
import "../../css/guest.css"

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="message">
                <i> {this.props.date} </i>
                <h3>{this.props.name}</h3>
                <i> {this.props.bio} </i>
                <p>{this.props.message}</p>
                <hr/> 
            </div> 
        )

    }
}

export default Message;