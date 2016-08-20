const {colors, spacing} = require('../variables/all');

module.exports = {

    base: {
        alignItems: 'center',
        background: colors.white,
        border: `1px solid ${colors.gray['100']}`,
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        padding: `0 ${spacing[600]}`,
    },

    heading: {
        fontSize: '1rem',
    }

};
