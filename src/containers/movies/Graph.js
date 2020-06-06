import React, { Component } from 'react';
import Movie from "./Movie"

import config from "../../config"

import '../../css/movies.css'

const firebase = require('firebase')

class Graph extends Component {
    constructor(props) {
        super(props);
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
                    filmNode = {name: value.Title, type: "movie", poster: value.Poster}
                    filmIndex = newNodes.push(filmNode) - 1
                    filmActors.forEach(actor => {
                        actorNode = {name: actor, type: "actor"}
                        if (!newNodes.some(({name}) => name === actorNode.name)) {
                            actorIndex = newNodes.push(actorNode) - 1
                        } else actorIndex = newNodes.findIndex(n => n.name === actorNode.name)
                        newLinks.push({source: actorIndex, target: filmIndex})
                    })
                    this.setState({nodes: newNodes,
                                   links: newLinks})
                })
            })

        })
        
    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default Graph;