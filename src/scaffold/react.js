console.log('scaffold');

const React = require('react');
const {Component} = React;
const Radium = require('radium');
const Signups = require('../signups/react');
const s = require('./styles');

@Radium
class Scaffold extends Component {

	render() {

		return (
			<div style={s.base}>
				<header style={s.header}>
					<div>
						<h1>Squid Rings</h1>
					</div>
				</header>
				<div>
					<Signups/>
					<Signups/>
				</div>
			</div>
		);

	}

}

module.exports = Scaffold;
