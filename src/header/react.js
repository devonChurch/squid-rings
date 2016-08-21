const React = require('react');
const {connect} = require('react-redux');
const {Component} = React;
const Radium = require('radium');
const {UPDATE_DATE} = require('../actions/all');
const request = require('../request/all');
const Icons = require('../icons/react');
const s = require('./styles');

@Radium
class Header extends Component {

	componentDidMount() {

		console.log('signups MOUNT');

		const action = () => this.props.dispatch({type: UPDATE_DATE});
		// const action = () => console.log('**** ACTION (date) ****');
		const delay = 1000;
		const key = 'date';

		request.add({action, delay, key});

	}

	render() {

		const {date, time} = this.props.header;

		return (
            <header style={s.base}>
                <h1 style={s.heading}>Squid Rings</h1>
                <div>
                    <Icons icon={'time'}/>
					{time}
                    <Icons icon={'date'}/>
					{date}
                </div>
            </header>
		);

	}

}

function mapStateToProps(state) {

	return state;

}

module.exports = connect(mapStateToProps)(Header);
