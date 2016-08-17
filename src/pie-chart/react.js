console.log('pieChart');
// http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/

const d3 = require('d3');

console.log('d3', d3);

/*
const data = [4, 8, 15, 16, 23, 42];
const setStyle = (value) => `${value * 10}px`;
const setText = (value) => `(${value})`;

d3.select('#barGraph')
	.selectAll('div')
	.data(data)
	.enter()
	.append('div')
	.style('height', setStyle)
	.text(setText);
*/

// - - - - - - - - - - - - - - - - -

/*
const dataSet = [
    {label: 'Abulia', count: 10},
    {label: 'Betelgeuse', count: 20},
    {label: 'Cantaloupe', count: 30},
    {label: 'Dijkstra', count: 40}
];

const arc = d3.arc();

arc({
  innerRadius: 0,
  outerRadius: 100,
  startAngle: 0,
  endAngle: Math.PI / 2
});
*/

// const dataset = {
//     apples: [53245, 28479, 19697, 24037, 40245],
// };

/*
const data = [4, 8, 15, 16, 23, 42];
const colors = ['red', 'orange', 'yellow', 'blue', 'green', 'purple'];
// const data = [53245, 28479, 19697, 24037, 40245];

const width = 460;
const height = 300;
const radius = Math.min(width, height) / 2;

// const color = d3.scale.category20();

// const pie = d3.layout
// const pie = d3.pie()
//     .sort(null);
const pie = d3.pie()
    .sort(null);

// const arc = d3.svg.arc()
const arc = d3.arc()
    .innerRadius(radius - 100)
    .outerRadius(radius - 50);

const svg = d3.select('#barGraph')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

const path = svg.selectAll('path')
    .data(pie(data))
    // .data(pie(dataset.apples))
    // .data(dataset.apples)
    .enter()
    .append('path')
    .attr('fill', (d, i) => colors[i])
    // .attr('fill', (d, i) => color(i))
    // .attr('fill', 'red')
    .attr('d', arc);
*/

// - - - - - - - - - - - - - - - - -

function scaffold(container, data) {

    const

        // data = [4, 8, 15, 16, 23, 42],
        colors = ['red', 'orange', 'yellow', 'blue', 'green', 'purple'],
        width = 460,
        height = 300,
        radius = Math.min(width, height) / 2,

        pie = d3.pie()
            .sort(null),

        arc = d3.arc()
            .innerRadius(radius - 100)
            .outerRadius(radius - 50),

        // svg = d3.select('#barGraph')
        svg = d3.select(container)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        // path = svg.selectAll('path')
        svg.selectAll('path')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('fill', (d, i) => colors[i])
            .attr('d', arc);

}

// CREATE >
// UPDATE >

const React = require('react');
const {connect} = require('react-redux');
const {Component} = React;
const Radium = require('radium');

@Radium
class PieChart extends Component {

    componentDidMount() {

        // React.findDOMNode(foo)
        // const container = this.getDOMNode();
        const container = this.refs.pieChart;
        const data = [4, 8, 15, 16, 23, 42];
        scaffold(container, data);

        console.log(' - - componentDidMount - - ');

        // pieChart

        return;

    }

    componentDidUpdate() {

        console.log(' - - componentDidUpdate - - ');

        const container = this.refs.pieChart;
        const data = [6, 2, 5, 34, 12, 6];
        // scaffold(container, data);

        const width = 460;
        const height = 300;
        const radius = Math.min(width, height) / 2;

        const pie = d3.pie()
            .sort(null);

        const arc = d3.arc()
            .innerRadius(radius - 100)
            .outerRadius(radius - 50);

        const path = d3.select(container)
            .selectAll('path')
            .data(pie(data))
            .attr('d', arc);

        // svg = d3.select(container)
        //
        // var selection = d3.select("#chart")
        //      .selectAll(".bar").data(numbers)
        //      .style("height", function(d){
        //           return d + "px";
        //      })
        //      .style("margin-top", function(d){
        //            return (100 - d) + "px";
        //      });

        return;

    }

    componentWillUnmount() {

        console.log(' - - componentWillUnmount - - ');

        return;

    }

	render() {

		console.log('PieChart', this);


		return (
			<div ref="pieChart"></div>
		);

	}

}

const mapStateToProps = (state) => state;

module.exports = connect(mapStateToProps)(PieChart);


/*

var w = 400;
var h = 400;
var r = h/2;
var color = d3.scale.category20c();

var data = [{"label":"Category A", "value":20},
		          {"label":"Category B", "value":50},
		          {"label":"Category C", "value":30}];


var vis = d3.select('#chart').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
var pie = d3.layout.pie().value(function(d){return d.value;});

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
arcs.append("svg:path")
    .attr("fill", function(d, i){
        return color(i);
    })
    .attr("d", function (d) {
        // log the result of the arc generator to show how cool it is :)
        console.log(arc(d));
        return arc(d);
    });

// add the text
arcs.append("svg:text").attr("transform", function(d){
			d.innerRadius = 0;
			d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
    return data[i].label;}
		);

 */
