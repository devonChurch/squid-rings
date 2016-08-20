const React = require('react');
const {Component} = React;
const Radium = require('radium');
const s = require('./styles');

@Radium
class Widget extends Component {

	render() {

		const {heading, children} = this.props;

		return (
			<article>
				<div style={s.base}>
					<header>
						<h2>{heading}</h2>
						<button>Update</button>
					</header>
					<div>
						{children}
					</div>
				</div>
			</article>
		);

	}

}

module.exports = Widget;
