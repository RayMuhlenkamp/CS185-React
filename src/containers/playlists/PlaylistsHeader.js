import React, { Component } from 'react';
import '../../css/style.css';

class PlaylistsHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Playlists</h1>
                </div>
                <p>
                    Here are some of my favorite music playlists, for your listening pleasure!
                </p>
            </div>
        );
  }
}

export default PlaylistsHeader;