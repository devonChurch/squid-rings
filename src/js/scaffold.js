console.log('scaffold');

const React = require('react');
const {Component} = React;
const Signups = require('./signups');

class Scaffold extends Component {

	render() {

		return (
			<div>
				<h3 className="h3">scaffold</h3>
				<Signups json={'this is a prop'} />
			</div>
		);

	}

}

module.exports = Scaffold;
