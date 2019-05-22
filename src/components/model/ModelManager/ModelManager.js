import React, { Component } from 'react';
import * as d3 from "d3";

// const data = [12, 5, 6, 6, 9, 10];

class ModelManager extends Component {

  componentDidMount() {
    this.drawChart();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return this.props.todos !== nextProps.todos;
  } 

  dragstarted(d) {
    d3.select(this).raise().classed('active', true);
  }

  dragged(d) {
    console.log(...d);
    // d[0] = x.invert(d3.event.x);
    // d[1] = y.invert(d3.event.y);
    // d3.select(this)
    //     .attr('cx', x(d[0]))
    //     .attr('cy', y(d[1]))
    // focus.select('path').attr('d', line);
  }

  dragended(d) {
    d3.select(this).classed('active', false);
  }


  drawChart() {
    // const data = [12, 5, 6, 6, 9, 10];
    // const svg = d3.select("#d3_modelChart").append("svg").attr("width", 700).attr("height", 300);

    // svg.selectAll("rect")
    //   .data(data)
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => i * 70)
    //   .attr("y", (d, i) => 0)
    //   .attr("width", 65)
    //   .attr("height", (d, i) => d * 10)
    //   .attr("fill", "green")


    let svg =  d3.select("#d3_modelChart").append("svg");
    let margin = {top: 20, right: 20, bottom: 30, left: 50};
    let width = 500 - margin.left - margin.right;
    let height = 350 - margin.top - margin.bottom;


    let points = d3.range(1, 10).map(function(i) {
      return [i * width / 10, 50 + Math.random() * (height - 100)];
    });

    let x = d3.scaleLinear().rangeRound([0, width]);
    let y = d3.scaleLinear().rangeRound([height, 0]);

    let xAxis = d3.axisBottom(x);
    let yAxis = d3.axisLeft(y);

    let line = d3.line()
      .x(function(d) { return x(d[0]); })
      .y(function(d) { return y(d[1]); });
      
    let drag = d3.drag()
      .on('start', this.dragstarted)
      .on('drag', this.dragged(x, y, focus, line))
      .on('end', this.dragended);
    
        
    svg.append('rect')
      .attr('class', 'zoom')
      .attr('cursor', 'move')
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .attr('width', width)
      .attr('height', height)
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  var focus = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  x.domain(d3.extent(points, function(d) { return d[0]; }));
  y.domain(d3.extent(points, function(d) { return d[1]; }));

  focus.append("path")
    .datum(points)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);

  focus.selectAll('circle')
    .data(points)
    .enter()
    .append('circle')
    .attr('r', 5.0)
    .attr('cx', function(d) { return x(d[0]);  })
    .attr('cy', function(d) { return y(d[1]); })
    .style('cursor', 'pointer')
    .style('fill', 'steelblue');

  focus.selectAll('circle')
    .call(drag);

  focus.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis);
    
  focus.append('g')
    .attr('class', 'axis axis--y')
    .call(yAxis);
}

render() {
    return (
      <div id="d3_modelChart"></div>
    );
  }
}

export default ModelManager;