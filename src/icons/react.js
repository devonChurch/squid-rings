const React = require('react');
const {Component} = React;
const Radium = require('radium');
const styles = require('./styles');

const icons = {
    menu: <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
};

@Radium
class Icons extends Component {

    menu() {

        return (
            <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
        );

    }

	render() {

		const {color, icon = 'menu'} = this.props;
        console.log('>>> color (icon)', color);
		const s = styles({color});

		return (
            <svg viewBox="0 0 32 32" style={s.base}>
                {icons[icon]}
            </svg>

		);

	}

}

module.exports = Icons;
