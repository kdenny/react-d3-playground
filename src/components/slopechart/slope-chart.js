import React, { Component } from 'react';
import * as d3 from 'd3';
import {withFauxDOM} from 'react-faux-dom';


class SlopeChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const faux = this.props.connectFauxDOM('div', 'chart')
    const svg = d3.select(faux)
        .append('svg')
        .attr('width', '500')
        .attr('height', '500');

    let margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom;

    let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        y = d3.scaleLinear().rangeRound([height, 0]);

    let g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let data = [
      {day: 1, value: 15},
      {day: 2, value: 20},
      {day: 3, value: 5},
    ];

      x.domain(data.map(function(d) { return d.day; }));
      y.domain([0, d3.max(data, function(d) { return d.value; })]);

      g.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      g.append("g")
          .attr("class", "axis axis--y")
          .call(d3.axisLeft(y).ticks(5))
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", "0.71em")
          .attr("text-anchor", "end")
          .text("Frequency");

      g.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.day); })
          .attr("y", function(d) { return y(d.value); })
          .attr("width", x.bandwidth())
          .attr("height", function(d) { return height - y(d.value); });
    this.props.animateFauxDOM(800);
  }

  render() {
    return (
        <div>
          <h2>Here is some fancy data:</h2>
          <div className='renderedD3'>
            {this.props.chart}
          </div>
        </div>
    );
  }
}

SlopeChart.defaultProps = {
  chart: 'loading'
}

export default withFauxDOM(SlopeChart)
