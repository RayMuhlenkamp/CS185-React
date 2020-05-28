import React, { Component } from 'react';
import Movie from "./Movie"
import { Modal, Button } from 'react-bootstrap'
import PaginateButton from './PaginateButton';
import MyModalBody from './MyModalBody';

import config from "../../config"

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/movies.css'


const firebase = require('firebase')

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false,
                      data: [],
                      current: {data: {Title: "",
                                       imdbRating: "",
                                       Poster: "",
                                       Plot: "",
                                       Director: "",
                                       Awards: "" }},
                      lists: ["All", "Watched", "Watch List"],
                      currentList: "All",
                      index: null
                    };

        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
        this.paginate = this.paginate.bind(this)
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        let newData = []
        let ref = firebase.database().ref()
        let pageRef = null                             
        if (!this.state.index) {
            pageRef = ref.child("lists/"+this.state.currentList)
                     .orderByKey()
                     .limitToFirst(9)
        } else {
            pageRef = ref.child("lists/"+this.state.currentList)
                     .orderByKey()
                     .startAt(this.state.index)
                     .limitToFirst(9)
        }
        
        pageRef.once('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                var key = childSnapshot.key;
                ref.child("movies").child(key).once('value', movieSnapshot => {
                    newData.push(movieSnapshot.val())
                    this.setState ({data: newData})
                })
            })
        })
    }

    paginate(){
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        let newData = []
        let ref = firebase.database().ref()
        let pageRef =  ref.child("lists/"+this.state.currentList)
                     .orderByKey()
                     .startAt(this.state.data[8].imdbID)
                     .limitToFirst(9)
        
        pageRef.once('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                var key = childSnapshot.key;
                ref.child("movies").child(key).once('value', movieSnapshot => {
                    newData.push(movieSnapshot.val())
                    this.setState ({data: newData})
                })
            })
        })
    }

    handleShow(data) {
        this.setState((state) => {
            return {show: true,
                    current: {data}}
        });
    }

    handleClose() {
        this.setState((state) => {
            return {show: false}
        });
    }

    handleDelete(id) {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }

        let newData = []
        let ref = firebase.database().ref()
        let pageRef = null

        if (id === this.state.index || !this.state.index) {
            this.setState({data: newData, index: null})
            pageRef = ref.child("lists/"+this.state.currentList)
                     .orderByKey()
                     .limitToFirst(9)
        } else {
            pageRef = ref.child("lists/"+this.state.currentList)
                     .orderByKey()
                     .startAt(this.state.index)
                     .limitToFirst(9)
        }
        
        pageRef.once('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                var key = childSnapshot.key;
                ref.child("movies").child(key).once('value', movieSnapshot => {
                    newData.push(movieSnapshot.val())
                    this.setState ({data: newData})
                })
            })
        })
        this.setState({show: false})
    }

    handleChange(event) {
        var value = event.target.value;

        this.setState({currentList: value})

        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }

        let newData = []
        this.setState({data:newData})

        let ref = firebase.database().ref()
        let pageRef = null
        if (!this.state.index) {
            pageRef = ref.child("lists/"+value)
                     .orderByKey()
                     .limitToFirst(9)
        } else {
            pageRef = ref.child("lists/"+value)
                     .orderByKey()
                     .startAt(this.state.index)
                     .limitToFirst(9)
        }
        
        pageRef.once('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                var key = childSnapshot.key;
                ref.child("movies").child(key).once('value', movieSnapshot => {
                    newData.push(movieSnapshot.val())
                    this.setState ({data: newData})
                })
            })
        })
    }

    render() {

        if (!this.state.data) return null;
        return (
            <div className="movies_body">
                <div className="top_bar">
                    <form>
                        <select value={this.state.currentList} onChange={this.handleChange}>
                            {this.state.lists.map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>
                    </form>
                    <form id="search">
                        <label>
                            Search for a movie:
                            <input type="text"></input>
                        </label>
                    </form>
                </div>
                <div className="content_grid">
                    <Movie data={this.state.data.length > 0 ? this.state.data[0] : null} onClick={this.handleShow}/>
                    <Movie data={this.state.data.length > 1 ? this.state.data[1] : null} onClick={this.handleShow}/>
                    <Movie data={this.state.data.length > 2 ? this.state.data[2] : null} onClick={this.handleShow}/>
                    <Movie data={this.state.data.length > 3 ? this.state.data[3] : null} onClick={this.handleShow}/>
                    <Movie data={this.state.data.length > 4 ? this.state.data[4] : null} onClick={this.handleShow}/>
                    <Movie data={this.state.data.length > 5 ? this.state.data[5] : null} onClick={this.handleShow}/>
                    <Movie data={this.state.data.length > 6 ? this.state.data[6] : null} onClick={this.handleShow}/>
                    <Movie data={this.state.data.length > 7 ? this.state.data[7] : null} onClick={this.handleShow}/>
                </div>
                <div>
                    <Modal show={this.state.show} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.current.data.Title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <MyModalBody close={this.handleClose} totalLists={this.state.lists} data={this.state.current.data} delete={this.handleDelete}/>
                        </Modal.Body>
                    </Modal>
                </div>

                <PaginateButton show={this.state.data.length > 8} callback={this.paginate}/>
            </div>
        )
    }
}

export default MovieList;