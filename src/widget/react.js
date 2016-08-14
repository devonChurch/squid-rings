console.log('widget');

const React = require('react');
const {Component} = React;
const s = require('./widget.css');

class Widget extends Component {

	render() {

		const {heading, children} = this.props;

		return (
			<article className="small-12 large-6 columns">
				<div className={s.base}>
					<header className={s.header}>
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
