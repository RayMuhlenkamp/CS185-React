import React, { Component } from 'react';
import '../../css/movies.css'
import { moviesKEY } from '../../config'
import config from "../../config"


const axios = require("axios").default;
const firebase = require('firebase')

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {id: ""};

        this.handleInputChange = this.handleInputChange.bind(this);
        }

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.id === '') {
            alert("Name must not be blank.")
            return;
        }

        const target = event.target[0];
        const imdbID = target.value;

        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }

        axios.get("https://www.omdbapi.com/" , {
            params: {
                apikey: moviesKEY,
                i: imdbID
            }
        })
        .then ( (response) => {
            let modified = response.data
            modified.Lists = {All: "All"}
            firebase.database().ref('movies').child(imdbID).set(response.data)
            firebase.database().ref('lists').child("All").child(imdbID).set(imdbID)
        })
        .catch ( (error) => {
            console.log(error);
        })
        
        alert("Successfully added")
        

    }

    handleInputChange(event) {
        const target = event.target;
        const id = target.value;

        this.setState({
            id: id
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