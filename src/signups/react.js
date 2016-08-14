console.log('signups');

const React = require('react');
const {connect} = require('react-redux');
const {Component} = React;
const Radium = require('radium');
const {FETCH_DATA} = require('../actions');
const Widget = require('../widget/react');
const s = require('./signups.css');

@Radium
class Signups extends Component {

	render() {

		console.log(this);

		const {fetching, data} = this.props.signups;

		return (
			<Widget heading={'Signups'}>
				<ul>
					<li className={s.apple}>fetching: {fetching ? 'True' : 'False'}</li>
					<li className={s.banana}>data: {data}</li>
				</ul>
			</Widget>
		);

	}

}

function mapDispatchToProps(dispatch) {

	const fetchData = () => {
		dispatch({
			type: 'signups', // State.
			operation: FETCH_DATA, // Action.
			fetching: true // Params.
		});
	};

	return {fetchData};

}

function mapStateToProps(state) {

	return state;

}

module.exports = connect(mapStateToProps)(Signups);
// module.exports = connect(mapStateToProps)(radium(Signups));
