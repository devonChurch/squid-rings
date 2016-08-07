console.log('scaffold');

const React = require('react');
const {Component} = React;
const {render} = require('react-dom');
const scaffold = document.getElementById('squidRings');

class Scaffold extends Component {

	render() {

		return (
			<h3 className="h3">
				from react =)
			</h3>
		);

	}

}

render(
	<Scaffold json={'this is a prop'}/>,
	scaffold
);
