import React, { Component } from 'react';
import '../../css/movies.css'

class CreateList extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "",
                      data: {}};
        console.log(this.state)

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.state.name === '') {
            alert("Name must not be blank.")
            return;
        }

        //firebase.database().ref('data').push().set(this.state)
        
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