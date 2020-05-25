import React, { Component } from 'react';
import AddMovie from "./AddMovie"
import CreateList from "./CreateList"
import MovieList from './MovieList';
import { SRLWrapper } from "simple-react-lightbox";
import '../../css/style.css';


const IDs = ["tt0446029", "tt1659337", "tt2584384", "tt0111161", "tt0102926", 
             "tt0407887", "tt1853728", "tt0120601"]

/*function setFormatting() {
    var caption = document.getElementsByClassName("SRLCaption")
    if (caption) {
        for (let item of caption) {
            item.style.whiteSpace = "pre"
        }
    }
}

const callbacks = {
    onLightboxOpened: (object) => setFormatting()
}*/

class MoviesContent extends Component {
    constructor(props) {
        super(props);
    }

    /*render() {
        return(
            <SRLWrapper callbacks={callbacks}>
                <div className="content_grid">
                    {IDs.map((item) => (
                        <Movie id={item}/>
                    ))}
                </div>
            </SRLWrapper>
            
        );*/

    render() {
        switch (this.props.subTab) {
            case "add":
                console.log("ADD")
                return(
                    <AddMovie/>
                )
                break;            
            case "create":
                console.log("CREATE")
                return(
                    <CreateList/>
                )
                break;
            case "movies":
                console.log("LIST")

            default:
                console.log("DEF")
                return(
                    <MovieList/>
                )
            
        }

    };
  
}

export default MoviesContent;