console.log('scaffold');

const React = require('react');
const {Component} = React;
const {render} = require('react-dom');
const {applyMiddleware, combineReducers, createStore} = require('redux');
const {Provider} = require('react-redux');
// const {createSagaMiddleware} = require('redux-saga');
import createSagaMiddleware from 'redux-saga';
const reducers = require('./reducers/all');
const sagas = require('./sagas/all');
const states = require('./states/all');
const Scaffold = require('./scaffold/react');
const squidRings = document.getElementById('squidRings');


function renderMe(store) {

	render(
		<Provider store={store}>
			<Scaffold />
		</Provider>,
		squidRings
	);

}

function devTools() {

	return window.devToolsExtension ? window.devToolsExtension() : undefined;

}

{

	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		combineReducers(reducers), // Reducers.
		states, // rehydrate.state(), // State.
		applyMiddleware(sagaMiddleware)
		// devTools() // Redux development tools.
	);

	sagaMiddleware.run(sagas);
	store.subscribe(() => renderMe(store)); // Render on state change.

	renderMe(store); // Prompt initial render on page load.

}
