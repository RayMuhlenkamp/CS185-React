import React, { Component } from 'react';
import Movie from "./Movie"
import { SRLWrapper } from "simple-react-lightbox";
import '../../css/style.css';

const IDs = ["tt0446029", "tt1659337", "tt2584384", "tt0111161", "tt0102926", 
             "tt0407887", "tt1853728", "tt0120601"]

class MoviesContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SRLWrapper >
                <div className="content_grid">
                    {IDs.map((item) => (
                        <Movie id={item}/>
                    ))}
                </div>
            </SRLWrapper>
            
        );
  }
}

export default MoviesContent;