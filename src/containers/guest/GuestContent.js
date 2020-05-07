import React, { Component } from 'react';
import Form from "./Form"
import Book from "./Book"
import '../../css/style.css';
import config from "../../config"
const firebase = require('firebase')

class GuestContent extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [],
                      shouldUpdate: true}
        
    }

    messageSubmit = (needsUpdate) => {
        this.setState({shouldUpdate: needsUpdate})
    }

    componentDidMount(){
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        let ref = firebase.database().ref("data")
        ref.on('value', snapshot => {
            let snap = snapshot.val()
            if (snap) {
                let keys = Object.keys(snap)
                let data = []
                keys.forEach((key) => { data.push(snap[key]) })
                this.setState({data: data,
                            shouldUpdate: false})
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.shouldUpdate === true) {
            let ref = firebase.database().ref("data")
            ref.on('value', snapshot => {
                let snap = snapshot.val()
                if (snap) {
                    let keys = Object.keys(snap)
                    let data = []
                    keys.forEach((key) => { data.push(snap[key]) })
                    this.setState({data: data,
                                shouldUpdate: false})
                }
            })
        }
    }

    render() {
        return(
            <div className="main_body">  
                <Form callback={this.messageSubmit}/>
                <Book data={this.state.data}/>
            </div>
        );
    }
}

export default GuestContent;