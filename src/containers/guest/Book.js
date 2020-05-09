import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        console.log(this.props.data)
        return(
            <div >
                <div className="book">
                    <hr className="book_hr"/>
                    {this.props.data.map((item) => (
                        <Message name={item.name} bio={item.bio} message={item.message} date={item.date}/>
                    ))}
                </div>
            </div>
        )

    }
}

Book.propTypes = {
    data: PropTypes.array
}

export default Book;