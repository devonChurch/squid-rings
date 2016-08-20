const color = require('color');
const {colors, spacing} = require('../variables/all');
const {black, white} = colors;
const shadow = color(black).alpha(0.5).rgbString();

module.exports = {

    base: {
        background: white,
        boxShadow: `0px 0px 10px 0px ${shadow}`,
        padding: spacing.large
    }

};
