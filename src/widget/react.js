const React = require('react');
const {Component} = React;
const Radium = require('radium');
const styles = require('./styles');

@Radium
class Widget extends Component {

	render() {

		const {heading, vertical, color, children} = this.props;
		const s = styles({vertical, color});

		return (
			<article style={s.base}>
				<div style={s.spacing}>
					<header style={s.header}>
						<h2>{heading}</h2>
						<button>Update</button>
					</header>
					<div style={s.content}>
						{children}
					</div>
				</div>
			</article>
		);

	}

}

module.exports = Widget;
