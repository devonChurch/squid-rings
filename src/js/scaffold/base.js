console.log('scaffold');

const React = require('react');
const {Component} = React;
const Signups = require('../signups/react');

class Scaffold extends Component {

	render() {

		return (
			<div>
				<div>
					<h1>Squid Rings</h1>
				</div>
				<div className="row">
					<Signups/>
					<Signups/>
				</div>
			</div>
		);

	}

}

module.exports = Scaffold;
