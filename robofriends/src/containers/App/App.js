import React, { Component } from 'react';
import './App.css';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Scroll from '../../components/Scroll/Scroll';

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
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		return (
			<div className="tc">
				<div className="pb4">
						<h1 className="f-headline">RoboFriends</h1>
						<SearchBar searchChange={this.onSearchChange} />
				</div>		
				{
					(!robots.length) ? 
					<h1>Loading</h1> :  
					(
						<Scroll>
							<CardList robots={filteredRobots} />
						</Scroll>
					)
				}
			</div>
		)
	}
}

export default App; 