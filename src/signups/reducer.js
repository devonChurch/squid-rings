const {FETCH_DATA, FETCH_SUCCEEDED} = require('../actions/all');
const signupState = require('./state');

module.exports = (state = signupState, action) => {

	// console.log('inside signups reducer', action);

	// deepFreeze(state);
	//
	// _debug('Questions:', 'action', action);

	switch (action.type) {

		case FETCH_DATA:
			return {
				...state,
				fetching: true
			};

		case FETCH_SUCCEEDED:
			return {
				...state,
				data: action.data,
				fetching: false
			};

		default:
			return state;

	}

};
