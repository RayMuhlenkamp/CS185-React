import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        console.log(this.props.data)
        return(
            <div>
                {this.props.data.map((item, index) => (
                    <p>{item.message}</p>
                ))}
            </div>
            
        )

    }
}

Book.propTypes = {
    data: PropTypes.array
}

export default Book;