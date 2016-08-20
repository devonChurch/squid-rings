const {colors, spacing} = require('../variables/all');

module.exports = {

    base: {
        background: colors.gray['50'],
        height: '100vh',
        minHeight: '250px',
        minWidth: '400px'
    },

    header: {
        height: '10%'
    },

    widgets: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '90%',
        padding: spacing[400],
        width: '100%'
    }

};
