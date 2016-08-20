const React = require('react');
const {Component} = React;
const Radium = require('radium');
const Header = require('../header/react');
const Authors = require('../authors/react');
const Signups = require('../signups/react');
const s = require('./styles');

@Radium
class Scaffold extends Component {

	render() {

		return (
			<div style={s.base}>
				<div style={s.header}>
					<Header/>
				</div>
				<div style={s.widgets}>
					<Authors/>
					<Signups/>
					<Signups/>
					<Signups/>
					<Signups/>
				</div>
			</div>
		);

	}

}

module.exports = Scaffold;
