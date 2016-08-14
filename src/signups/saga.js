const {takeEvery, takeLatest} = require('redux-saga');
const {call, put} = require('redux-saga/effects');
const {FETCH_DATA, FETCH_SUCCEEDED} = require('../actions/all');
const request = require('./request');

function* fetchData() {

	try {

		const data = yield call(request);
		yield put({type: FETCH_SUCCEEDED, data});

	} catch (error) {

		// yield put({type: "FETCH_FAILED", error})

	}

}

function* saga() {

	yield* takeLatest(FETCH_DATA, fetchData);

}

module.exports = saga;
