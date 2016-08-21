const React = require('react');
const {connect} = require('react-redux');
const {Component} = React;
const Radium = require('radium');
const {FETCH_DATA} = require('../actions/all');
const request = require('../request/all');
const Widget = require('../widget/react');


@Radium
class Authors extends Component {

	componentDidMount() {

		console.log('authors MOUNT');

		// const action = () => this.props.dispatch({type: FETCH_DATA});
		const action = () => console.log('**** ACTION (authors) ****');
		const delay = 3000;
		const key = 'authors';

		request.add({action, delay, key});

	}

	render() {

		return (
			<Widget requestKey={'authors'} heading={'Top Authors'} vertical={true} color={'blue'}>
				authors....
			</Widget>
		);

	}

}

function mapStateToProps(state) {

	return state;

}

module.exports = connect(mapStateToProps)(Authors);
