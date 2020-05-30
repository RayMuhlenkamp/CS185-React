import React, { Component } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

import config from "../../config"

const firebase = require('firebase')

class MyModalBody extends Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data,
                      lists: []}
        
        if (props.data.Lists) {
            props.totalLists.forEach((item) => {
                if (!props.data.Lists[item]) {
                    this.state.lists.push(item)
                }
            })
        }   else this.state.lists = props.totalLists;

        this.addToList = this.addToList.bind(this)
        this.delete = this.delete.bind(this)
    }

    addToList(item) {
        let newListsToDropdown = this.state.lists.filter(list => list !== item)
        let newListsToFirebase = this.state.data.Lists
        newListsToFirebase[item] = item       
        
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        let ref = firebase.database().ref()                          
        ref.child("movies/"+this.state.data.imdbID).child("Lists").set(newListsToFirebase)
        if (item !== "All") {
            ref.child("lists/"+item).child(this.state.data.imdbID).set(this.state.data.imdbID)
        }

        this.setState({data: {...this.state.data, Lists: newListsToFirebase}, 
                    lists: newListsToDropdown})
        
    }

    delete() {
        var lists = []
        Object.keys(this.state.data.Lists).forEach((list) => {
            lists.push(list)
        })

        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        let ref = firebase.database().ref()

        lists.forEach((list) => {
           ref.child("lists/"+list+"/"+this.state.data.imdbID).remove()
        })
        ref.child("movies/"+this.state.data.imdbID).remove()

        this.props.delete(this.state.data.imdbID)
        alert("Deleted from database")
    }

    render() {
        let data = this.state.data
        return(
            <div className="myModal-body">
                <div className="myModal-left">
                    <img src={data.Poster}/>
                </div>
                <div className="myModal-right">
                    <p>{data.Plot}</p>
                    <i>{data.Awards}</i>
                    <br/><br/>
                    <p>Directed by {data.Director}</p>
                    <i>{data.Runtime}</i>
                    <br/><br/>
                    <div className="myModal-buttons">
                        <DropdownButton id="dropdown-basic-button" title="Add to List">
                            {this.state.lists.map((item) => (
                                <Dropdown.Item as="button" onClick={(e) => this.addToList(item)}>{item}</Dropdown.Item> 
                            ))}
                        </DropdownButton>
                        <Button id="delete" variant="danger" onClick={this.delete}>Delete</Button>
                    </div>
                    
                </div>
                
            </div>
        );
  }
}

export default MyModalBody;