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
					<div className="row">
						<h1 className="columns">Squid Rings</h1>
					</div>
				</header>
				<div className="row">
					<Signups/>
					<Signups/>
				</div>
			</div>
		);

	}

}

module.exports = Scaffold;
