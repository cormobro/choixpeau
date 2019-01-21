import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from  'react-redux';
import { createStore } from  'redux';
//import  reducers  from  './reducers';
import Result from './containers/Result';
let selectedHouses = '';
const houses = [
	'Serpentard',
	'Griffondor',
	'Serdaigle',
	'Pouffsoufle',
];
function reducer(state = {houses, selectedHouses}, action) {
	console.log('reducer',state.houses, state.selectedHouses,action)
	switch (action.type) {
		case 'UPDATE_CHOICE_WITH_DELAY':
			return {
				houses,
				selectedHouses:  houses[action.indexSelected]
			}; 
		default:
			return state; 
	}
}
const  store = createStore(reducer);

class App extends Component {
	render() {
		return (
			<div className="App">
			<Provider  store={store}>
			<Result  />
			</Provider>
			</div>
		);
	}
}

export default App;
