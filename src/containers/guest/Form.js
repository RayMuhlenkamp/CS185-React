import React, { Component } from 'react';
import '../../css/guest.css';

const firebase = require('firebase')


class Form extends Component {
    constructor(props) {
        super(props);
        const timestamp = Date.now(); // This would be the timestamp you want to format
        const date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
        this.state = {name: '',
                      bio: '',
                      message: '',
                      viewable: false,
                      email: '',
                      date: date};
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

        const timestamp = Date.now(); // This would be the timestamp you want to format
        const date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
        this.state.date = date
        firebase.database().ref('data').push().set(this.state)
        
        this.setState({name: '',
                      bio: '',
                      message: '',
                      viewable: false,
                      email: '',
                      date: null})
                      
        this.props.callback(true);
        alert("Successful submission")
    }

    handleInputChange(event) {
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
            <div >
                <form className="form" onSubmit={this.handleFormSubmit}>
                    <label>
                        Name:
                        <br/>
                        <input
                            className="textinput"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange} />
                            <br/>
                    </label>
                    <br/>
                    <label>
                        Bio (optional):
                        <br/>
                        <textarea 
                            name="bio"
                            value={this.state.bio}
                            onChange={this.handleInputChange} />
                            <br/>
                    </label>
                    <br/>
                    <label>
                        Message:
                        <br/>
                        <textarea 
                            name="message"
                            value={this.state.message}
                            onChange={this.handleInputChange} />
                            <br/>
                    </label>
                    <br/>
                    <label>
                        Make public?: 
                        <input 
                            className="check"
                            name="viewable"
                            type="checkbox"
                            checked={this.state.viewable}
                            onChange={this.handleInputChange}
                        />
                        <br/>
                    </label>
                    <br/>
                    <label>
                        Email (optional, will not be public):
                        <br/>
                        <input 
                            className="textinput"
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