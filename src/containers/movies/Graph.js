import React, { Component } from 'react';
import GraphContent from './GraphContent';

import config from "../../config"

import '../../css/movies.css'

const firebase = require('firebase')

class Graph extends Component {
    constructor(props) {
        super(props);
        // group 1 = films, 2 = actors
        this.state = {nodes: [],
                      links: []}

        this.componentDidMount = this.componentDidMount.bind(this)
    }
    
    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }

        let newNodes = []
        let newLinks = []
        var filmActors, filmNode, actorNode, filmIndex, actorIndex
        let ref = firebase.database().ref()

        ref.child("lists/Graph").once('value', listSnapshot => {
            listSnapshot.forEach(item => {
                const key = item.key
                ref.child("movies/"+key).once('value', film =>{
                    const value = film.val()
                    filmActors = value.Actors.split(", ")
                    filmNode = {name: value.Title, group: 1, poster: value.Poster, id: value.imdbID}
                    filmIndex = newNodes.push(filmNode) - 1
                    filmActors.forEach(actor => {
                        actorNode = {name: actor, group: 2}
                        if (!newNodes.some(({name}) => name === actorNode.name)) {
                            actorIndex = newNodes.push(actorNode) - 1
                        } else actorIndex = newNodes.findIndex(n => n.name === actorNode.name)
                        newLinks.push({source: actorIndex, target: filmIndex, value: 1})
                    })
                    this.setState({nodes: newNodes,
                                   links: newLinks})
                })
            })

        })
        
    }

    render() {
        var nodes = this.state.nodes;
        var links = this.state.links;

        if (nodes.length === 0 || links.length === 0){
            return null;
        }
        
        return(
            <div>
                <GraphContent nodes={nodes} links={links}/>
            </div>
        )
    }
}

export default Graph;