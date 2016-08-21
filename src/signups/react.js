const React = require('react');
const {connect} = require('react-redux');
const {Component} = React;
const Radium = require('radium');
const {FETCH_DATA} = require('../actions/all');
const request = require('../request/all');
const Widget = require('../widget/react');
const PieChart = require('../pie-chart/react');

@Radium
class Signups extends Component {

	componentDidMount() {

		console.log('signups MOUNT');

		// const action = () => this.props.dispatch({type: FETCH_DATA});
		const action = () => console.log('**** ACTION (signups) ****');
		const delay = 6000;
		const key = 'signups';

		request.add({action, delay, key});

	}

	clicked() {

		console.log('clicked', this);


		// this.props.dispatch({type: FETCH_DATA});

		request.call('signups');

	}

	render() {

		// console.log(this);

		const {fetching, data} = this.props.signups;

		return (
			<Widget heading={'Signups'} vertical={false} color={'teal'}>
				<button onClick={() => this.clicked()}>Click me</button>
				<ul>
					<li>fetching: {fetching ? 'True' : 'False'}</li>
					<li>data: {data}</li>
				</ul>
				<PieChart />
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
