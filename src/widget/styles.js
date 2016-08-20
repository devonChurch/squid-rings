const changeColor = require('color');
const {colors, spacing} = require('../variables/all');
const {black, white} = colors;
const shadow = changeColor(black).alpha(0.15).rgbString();

module.exports = ({
    color = 'gray',
    vertical = false
}) => {

    const baseColor = colors[color];
    const border = `1px solid ${baseColor['100']}`;

    return {

        base: {
            height: vertical ? '100%' : '50%',
            padding: spacing[400],
            position: 'relative',
            width: vertical ? '20%' : '40%',
        },

        spacing: {
            background: white,
            border,
            boxShadow: `0px 0px 15px 0px ${shadow}`,
            height: '100%',
            overflow: 'hidden',
            width: '100%',
        },

        header: {
            borderBottom: border,
            color: baseColor[500],
            padding: `${spacing[900]} ${spacing[900]} 0 ${spacing[900]}`,
        },

        content: {
            padding: spacing[900],
        },

    };

};
