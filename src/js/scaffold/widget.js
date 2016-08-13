console.log('widget');

const React = require('react');
const {Component} = React;

class Widget extends Component {

	render() {

		const {heading, children} = this.props;

		return (
			<article className="small-12 large-6 columns">
				<row className="row">
					<header className="small-12 columns">
						<h2 className="apple">{heading}</h2>
						<button className="button">Update</button>
					</header>
					<div className="small-12 columns">
						{children}
					</div>
				</row>
			</article>
		);

	}

}

module.exports = Widget;
