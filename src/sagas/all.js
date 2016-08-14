const {fork} = require('redux-saga/effects');
const signups = require('../signups/saga');

module.exports = function* sagas() {

    yield fork(signups);

    // yield fork(startLinter)

};
