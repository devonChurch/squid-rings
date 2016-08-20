const changeColor = require('color');
const {colors, spacing} = require('../variables/all');

module.exports = ({
    color = 'gray'
}) => {

    const baseColor = colors[color];
    const size = '2rem';

    return {

        base: {
            fill: baseColor[500],
            height: size,
            // padding: spacing[400],
            width: size,
        },

    };

};
