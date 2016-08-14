console.log('scaffold');

const React = require('react');
const {Component} = React;
const Signups = require('../signups/react');
const s = require('./scaffold.css');

class Scaffold extends Component {

	render() {

		return (
			<div className={s.base}>
				<header className={s.header}>
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
