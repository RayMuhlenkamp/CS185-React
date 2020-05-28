import React, { Component } from 'react';
import config from "../../config"


import '../../css/movies.css'

const firebase = require('firebase')

class CreateList extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "",
                      data: {}};
                      
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.state.name === '') {
            alert("Name must not be blank.")
            return;
        }

        const target = event.target[0];
        const listName = target.value;

        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }

        firebase.database().ref('lists').child(listName).set("")
        
        this.setState({name: ''})
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
                            <h4>List Name:</h4>
                            <textarea 
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange} />
                        </label>
                        <br/>
                        <i>Please give the name of your new list.</i>
                        <br/> <br/>
                        <input type="submit" value="Create" />
                    </form>
                </div>
                
            </div>
        )
    }
}

export default CreateList;