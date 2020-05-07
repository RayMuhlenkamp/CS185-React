import React, { Component } from 'react';
import Form from "../../Form"
import '../../css/style.css';

class GuestContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="main_body">  
                <Form/>
            </div>
        );
    }
}

export default GuestContent;