import React, { Component } from 'react';
const firebase = require('firebase')

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
                      bio: '',
                      message: '',
                      viewable: false,
                      email: ''};
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();

        if (this.state.name === '') {
            alert("Name must not be blank.")
            return;
        }
        else if (this.state.message === '') {
            alert("Message must not be blank.")
            return;
        }
        else if (this.state.name.length <= 5) {
            alert("Name must be greater than 5 characters.")
            return;
        }
        else if (this.state.name.length >= 20) {
            alert("Name must be less than 20 characters.")
            return;
        }
        else if (this.state.bio.length >= 100) {
            alert("Bio must be less than 100 characters.")
            return;
        }
        else if (this.state.message.length <= 15) {
            alert("Message must be greater than 15 characters.")
            return;
        }
        else if (this.state.message.length >= 500) {
            alert("Message must be less than 500 characters.")
            return;
        }

        firebase.database().ref('data').push().set(this.state)
        this.props.callback(true);
        alert("Successful submission")
    }

    handleInputChange(event) {
        const temp = this.state;
        const target = event.target;
        const name = target.name;
        const value = name === "viewable" ? target.checked : target.value;

        if (name==="name") {
            if (value.length >= 20) {
                alert("Name must be less than 20 characters.")
                return;
            }
        }
        else if (name==="bio") {
            if (value.length >= 100) {
                alert("Bio must be less than 100 characters.")
                return;
            }
        }
        else if (name==="message") {
            if (value.length >= 500) {
                alert("Message must be less than 500 characters.")
                return;
            }
        }

        this.setState({
            [name]: value
        });
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Name:
                        <br/>
                        <input 
                            name="name"
                            type="text"
                            value={this.state.namevalue}
                            onChange={this.handleInputChange} />
                            <br/>
                    </label>
                    <br/>
                    <label>
                        Bio (optional):
                        <br/>
                        <input 
                            name="bio"
                            type="text"
                            value={this.state.bio}
                            onChange={this.handleInputChange} />
                            <br/>
                    </label>
                    <br/>
                    <label>
                        Message:
                        <br/>
                        <input 
                            name="message"
                            type="text"
                            value={this.state.message}
                            onChange={this.handleInputChange} />
                            <br/>
                    </label>
                    <br/>
                    <label>
                        Make public?: 
                        <input 
                            name="viewable"
                            type="checkbox"
                            checked={this.state.viewable}
                            onChange={this.handleInputChange}
                        />
                        <br/>
                    </label>
                    <br/>
                    <label>
                        Email (optional):
                        <br/>
                        <input 
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInputChange} />
                    </label>
                    <br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default Form;