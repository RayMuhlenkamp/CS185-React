import React, { Component } from 'react';
import Movie from "./Movie"
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/movies.css'
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';

const IDs = ["tt0446029", "tt1659337", "tt2584384", "tt0111161", "tt0102926", 
             "tt0407887", "tt1853728", "tt0120601"]

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false,
                      current: {data: {Title: "",
                                       imdbRating: "",
                                       Poster: "",
                                       Plot: "",
                                       Director: "",
                                       Awards: "" }},
                      currentList: "All"};

        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleShow(data) {
        console.log("showModal")
        this.setState((state) => {
            return {show: true,
                    current: {data}}
        });
    }

    handleClose() {
        console.log("hideModal")
        this.setState((state) => {
            return {show: false}
        });
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState((state) => {
            return {currentList: value}
        })
    }

    render() {
        return (
            <div className="movies_body">
                <div className="top_bar">
                    <form>
                        <select value={this.state.currentList} onChange={this.handleChange}>
                            {/*This is where we should map the lists as options from firebase*/}
                            <option value="all">All</option>
                            <option value="watched">Watched</option>
                            <option value="watchlist">Watch List</option>
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
                    {IDs.map((item) => (
                            <Movie id={item} onClick={this.handleShow}/>
                        ))}
                </div>
                <div>
                    <Modal show={this.state.show} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.current.data.Title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="myModal-body">
                                <img src={this.state.current.data.Poster}/>
                                {this.state.current.data.imdbRating}
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default MovieList;