import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import '../../css/movies.css'

class PaginateButton extends Component {
    constructor(props) {
        super(props);
        this.state = { show: props.show };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.show !== prevState.show) {
            this.setState({ show: this.props.show })
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        else return (
            <Button className="paginate_button" variant="secondary" onClick={this.props.callback}>Load more films...</Button>
        )
    }
}

export default PaginateButton;