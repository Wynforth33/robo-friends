import React from 'react';
import './SearchBar.css';

const SearchBar = ( { searchfield, searchChange} ) => {
	return (
		<div>
			<input 
				className ='pa3 ba b--green by-lightest-blue'
				type="search" 
				placeholder='search robots'
				onChange={searchChange}
			/>	
		</div>
	)
}

export default SearchBar; 