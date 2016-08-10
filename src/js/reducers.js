console.log('reducers');

const {FETCH_DATA} = require('./actions');

function signups(state = {
	fetching: false,
	data: 1
}, action) {

	// deepFreeze(state);
	//
	// _debug('Questions:', 'action', action);

	switch (action.operation) {

		case FETCH_DATA:
			return {...state, data: action.data};

		default:
			return state;

	}

}

module.exports = {signups};
