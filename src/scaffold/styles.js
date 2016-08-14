const {colors, spacing} = require('../variables/all');

module.exports = {

    base: {
        background: colors.gray['50'],
        minHeight: '100vh'
    },

    header: {
        background: colors.white,
        border: `1px solid ${colors.gray['100']}`,
        marginBottom: spacing.large,
    }
};
