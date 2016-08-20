const React = require('react');
const {Component} = React;
const Radium = require('radium');
const s = require('./styles');

@Radium
class Header extends Component {

	render() {

		return (
            <header style={s.base}>
                <h1>Squid Rings</h1>
            </header>
		);

	}

}

module.exports = Header;
