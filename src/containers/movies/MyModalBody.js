import React, { Component } from 'react';

class MyModalBody extends Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data}
    }

    render() {
        let data = this.state.data
        return(
            <div className="myModal-body">
                <img src={data.Poster}/>
                {data.imdbID}
            </div>
        );
  }
}

export default MyModalBody;