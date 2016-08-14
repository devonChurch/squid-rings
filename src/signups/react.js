console.log('signups');

const React = require('react');
const {connect} = require('react-redux');
const {Component} = React;
const Radium = require('radium');
const {FETCH_DATA} = require('../actions/all');
const Widget = require('../widget/react');

@Radium
class Signups extends Component {

	clicked() {

		console.log('clicked', this);


		this.props.dispatch({type: FETCH_DATA});

	}

	render() {

		console.log(this);

		const {fetching, data} = this.props.signups;

		return (
			<Widget heading={'Signups'}>
				<button className="button" onClick={() => this.clicked()}>Click me</button>
				<ul>
					<li>fetching: {fetching ? 'True' : 'False'}</li>
					<li>data: {data}</li>
				</ul>
			</Widget>
		);

	}

}

// function mapDispatchToProps(dispatch) {
//
// 	const fetchData = () => {
// 		dispatch({
// 			type: 'signups', // State.
// 			operation: FETCH_DATA, // Action.
// 			fetching: true // Params.
// 		});
// 	};
//
// 	return {fetchData};
//
// }

function mapStateToProps(state) {

	return state;

}

module.exports = connect(mapStateToProps)(Signups);
