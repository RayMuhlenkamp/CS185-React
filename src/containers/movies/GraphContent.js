import React, { Component } from 'react';

import '../../css/movies.css'

var d3 = require("d3");

class GraphContent extends Component {
    constructor(props) {
        super(props);
        this.state = {nodes: this.props.nodes,
                      links: this.props.links}

        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.chart = this.chart.bind(this)
    }


    drag = (simulation) => {
        function dragStarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragEnded(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return d3.drag()
                 .on("start", dragStarted)
                 .on("drag", dragged)
                 .on("end", dragEnded)
    }

    chart(nodes, links) {
        const width = 1920;
        const height = 1080;
        
        const obj_links = links.map(d => Object.create(d));
        const obj_nodes = nodes.map(d => Object.create(d));

        const svg = d3.create("svg")
                      .attr("viewBox", [0, 0, width, height]);

        var defs = svg.append('svg:defs');

        nodes.forEach( (node) => {
            defs.append("svg:pattern")
                .attr("id", node.id)
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("viewBox", "0 0 1 1")
                .attr("patternUnits", "objectBoundingBox")
                .append("svg:image")
                .attr("xlink:href", node.poster)
                .attr("width", "1.5")
                .attr("height", "1.5")
                .attr("x", -.25)
                .attr("y", 0);
        })
        const simulation = d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(obj_links).id(d => d.index).distance(200))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width/2, height/2))

        const link = svg.append("g")
                        .attr("stroke", "#999")
                        .attr("stroke-opacity", 0.6)
                        .selectAll("line")
                        .data(obj_links)
                        .join("line")
                        .attr("stroke-width", d => Math.sqrt(d.value))

        const fill = (node) => {
            if (node.group === 2) {
                return d3.color("steelblue")
            }
            return d3.color("pink")
        }

        const radius = (node) => {
            if (node.group ===  2) {
                return 20
            }
            return 50
        }

        const node = svg.append("g")
                        .attr("stroke", "#fff")
                        .attr("stroke-width", 1.5)
                        .selectAll("circle")
                        .data(obj_nodes)
                        .join("circle")
                        .attr("r", radius)
                        .attr("fill", fill)
                        .style("fill", (d) => { if(d.group === 1) return "url(#" + d.id + ")" })
                        .call(this.drag(simulation))
         
        node.append("title").text(d => d.name)

        simulation.on("tick", () => {
            link 
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);
            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });

        return svg.node();
    }
    
    componentDidUpdate() {
        const elem = document.getElementById("mysvg")
        if (elem.children.length === 0) {
            elem.appendChild(this.chart(this.state.nodes, this.state.links))
        }   else elem.replaceChild(this.chart(this.state.nodes, this.state.links), elem.lastChild)
    }

    render() {
        return(
            <div id="mysvg">
            </div>
        )
    }
}

export default GraphContent;