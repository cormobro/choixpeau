import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';

class Result extends React.Component {
constructor(props){
	super(props);
	setInterval(() =>  this.props.dispatch({ type:  '' }), 1000)
}
	render() {
		console.log(this.props)
		return (
			<div>
			<ul>
			{this.props.houses.map(house  =>  <li  key={house}>{house}</li>)}
			</ul>
			<Message  message={this.props.selectedHouses}  />
			</div>
		)
	}
}

export  default  connect(store=>store)(Result)
