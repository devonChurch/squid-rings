const React = require('react');
const {Component} = React;
const Radium = require('radium');
const s = require('./styles');

@Radium
class Widget extends Component {

	render() {

		const {heading, children} = this.props;

		return (
			<article className="small-12 large-6 columns">
				<div style={s.base}>
					<header>
						<h2>{heading}</h2>
						<button className="button">Update</button>
					</header>
					<div className="">
						{children}
					</div>
				</div>
			</article>
		);

	}

}

module.exports = Widget;
