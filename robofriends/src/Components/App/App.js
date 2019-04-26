import React, { Component } from 'react';
import './App.css';
import CardList from '../CardList/CardList';
import SearchBar from '../SearchBar/SearchBar';
import Scroll from '../Scroll/Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [ ],
			searchfield: ' '
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then( response => response.json() )
			.then( users => this.setState({ robots: users }));
	}

	onSearchChange = ( event ) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const filteredRobots = this.state.robots.filter( robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		return (
			<div className="tc">
				<div className="pb3">
					<h1 className="f-headline">RoboFriends</h1>
					<SearchBar searchChange={this.onSearchChange} />
				</div>	 
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		)
	}
}

export default App; 