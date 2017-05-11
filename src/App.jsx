import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Footer extends Component {
	render() {
		return (
			<div className="Footer">
			</div>
		)
	}
}

//use functions for stateless components, classes for stateful ones
function ActionLink() {
	function handleClick(e) {
		e.preventDefault();
		console.log('The link was clicked.');
	}
	return (
		<a href="#" onClick={handleClick}>Click me</a>
	);
}

function WarningBanner(props) {
	//don't render a component if the prop value is false
	if(!props.warn) {
		return null;
	}
	return (
		<div className="warning">
			Warning!
		</div>
	);
}

class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		//if we refer to a method without () after it, make sure to bind that method
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}
	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}
}

function Square() {
	return (
		<div className="square"></div>
	);
}

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}
	tick() {
		this.setState({
			date: new Date()
		});
	}
	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	render() {
		return (
			<h1>The time is now: {this.state.date.toLocaleTimeString()}.</h1>
		)
	}
}

const listItems = [1, 2, 3, 4, 5].map((num) => 
	<li>{num}</li>
);

function List() {
	return (
		<ul>
			{listItems}
		</ul>
	);
}

//test
class App extends Component {
  render() {
    return (
      <div className="App">
				<Square></Square>
				<Clock></Clock>
				<Toggle></Toggle>
				<List></List>
      </div>
    );
  }
}

export default App;
