const React = require('react');
const {connect} = require('react-redux');
const {Component} = React;
const Radium = require('radium');
const {FETCH_DATA} = require('../actions/all');
const Widget = require('../widget/react');


@Radium
class Authors extends Component {

	render() {

		return (
			<Widget heading={'Top Authors'} vertical={true} color={'blue'}>
				authors....
			</Widget>
		);

	}

}

function mapStateToProps(state) {

	return state;

}

module.exports = connect(mapStateToProps)(Authors);
