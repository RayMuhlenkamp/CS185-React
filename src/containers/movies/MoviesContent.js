import React, { Component } from 'react';
import '../../css/style.css';
import { moviesKEY } from '../../config'

class MoviesContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="content_grid">
                <div className="content_holder">
                    <iframe className="playlist" src="https://open.spotify.com/embed/playlist/5Uhlzklmcnl8jRYh7cxdgX" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>

                <div className="content_holder">
                    <iframe className="playlist" src="https://open.spotify.com/embed/playlist/78KwttLhfegWgn3AwxxgEE" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>    
                </div>

                <div className="content_holder">
                    <iframe className="playlist" src="https://open.spotify.com/embed/playlist/52dhfbnG3iKesB3pjJJNmr" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>    
                </div>

                <div className="content_holder">
                    <iframe className="playlist" src="https://open.spotify.com/embed/playlist/3t6OGkyJEFLJMW3pLbtde8" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>    
                </div>

                <div className="content_holder">
                    <iframe className="playlist" src="https://open.spotify.com/embed/playlist/56qSt2tlxP25Chg3jMF5dD" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>        
                </div>

                <div className="content_holder">
                    <iframe className="playlist" src="https://open.spotify.com/embed/playlist/5hk1HuLPZrrYK5jQRCBtiW" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>        
                </div>

                <div className="content_holder">
                    <iframe className="playlist" src="https://open.spotify.com/embed/playlist/3ccZZQRqBzg1AWfK248Bzr" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>        
                </div>
            </div>
        );
  }
}

export default MoviesContent;