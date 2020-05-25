import React, { Component } from 'react';
import '../../css/movies.css'

const firebase = require('firebase')

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {id: "",
                      data: {}};
        console.log(this.state)

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.state.id === '') {
            alert("Name must not be blank.")
            return;
        }

        //firebase.database().ref('data').push().set(this.state)
        
        this.setState({id: ''})
        alert("Successfully added")
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }
    render () {
        return (
            <div className="add_form">
                <div>
                    <form className="form" onSubmit={this.handleFormSubmit}>
                        <label>
                            <h4>Movie ID:</h4>
                            <textarea 
                                name="id"
                                value={this.state.id}
                                onChange={this.handleInputChange} />
                        </label>
                        <br/>
                        <i>Please give the imbd ID of the movie.</i>
                        <br/> <br/>
                        <input type="submit" value="Add" />
                    </form>
                </div>
                
            </div>
        )
    }
}

export default AddMovie;