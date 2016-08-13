console.log('scaffold');

const React = require('react');
const {Component} = React;
const {render} = require('react-dom');
const {combineReducers, createStore} = require('redux');
const {Provider} = require('react-redux');
const reducers = require('./reducers');
const Base = require('./scaffold/base');
const squidRings = document.getElementById('squidRings');


function renderMe(store) {

	render(
		<Provider store={store}>
			<Base />
		</Provider>,
		squidRings
	);

}

function devTools() {

	return window.devToolsExtension ? window.devToolsExtension() : undefined;

}

{

	const store = createStore(
		combineReducers(reducers), // Reducers.
		// rehydrate.state(), // State.
		devTools() // Redux development tools.
	);

	store.subscribe(() => renderMe(store)); // Render on state change.

	renderMe(store); // Prompt initial render on page load.

}
