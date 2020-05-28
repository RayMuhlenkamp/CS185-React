import React, { Component } from 'react';
import { moviesKEY } from '../../config'

const axios = require("axios").default;

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null}

        this.setModal = this.setModal.bind(this)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.data !== prevProps.data) {
            this.setState({ data: this.props.data })
        }
    }

    setModal() {
        if (this.props.data) {
            this.props.onClick(this.props.data);
        }
    }

    render() {
        if (!this.state.data) {
            return null;
        }
        return(
            <div className="content_holder" onClick={this.setModal}>
                <img className="img" src={this.state.data.Poster} />
            </div>
        );
  }
}

export default Movie;