console.log('signups');

const React = require('react');
const {connect} = require('react-redux');
const {Component} = React;
const {FETCH_STATUS, UPDATE_VALUE} = require('./actions');

class Signups extends Component {

	render() {

		console.log(this);

		const {fetching, data} = this.props.signups;

		return (
			<div>
				<p>signups</p>
				<ul>
					<li>fetching: {fetching ? 'True' : 'False'}</li>
					<li>data: {data}</li>
				</ul>
			</div>
		);

	}

}

function mapStateToProps(state) {

	return state;

}

module.exports = connect(mapStateToProps)(Signups);
