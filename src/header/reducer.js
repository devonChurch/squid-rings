const moment = require('moment');
const {UPDATE_DATE} = require('../actions/all');
const headerState = require('./state');

module.exports = (state = headerState, action) => {

	switch (action.type) {

		case UPDATE_DATE:

			return (() => {

				const current = moment();
				const date = current.format('Do MMMM YYYY');
				const time = current.format('h:mm:ss a');

				return {...state, date, time};

			})();

		default:
			return state;

	}

};
