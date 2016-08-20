const React = require('react');
const {Component} = React;
const Radium = require('radium');
const Icons = require('../icons/react');
const s = require('./styles');

@Radium
class Header extends Component {

	render() {

		return (
            <header style={s.base}>
                <h1 style={s.heading}>Squid Rings</h1>
                <div>
                    <Icons icon={'time'}/>
                    <Icons icon={'date'}/>
                </div>
            </header>
		);

	}

}

module.exports = Header;
