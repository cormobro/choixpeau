import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from  'react-redux';
import { createStore } from  'redux';
//import  reducers  from  './reducers';
import Result from './containers/Result';

const houses = [
	'Serpentard',
	'Griffondor',
	'Serdaigle',
	'Pouffsoufle',
];
const  reducer = (state, action) => ({
	houses,
	selectedHouses:  houses[Math.floor(Math.random() * 4)]
})
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
