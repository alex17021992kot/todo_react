import React, { Component } from 'react';
import './SearchPanel.css';
class SearchPanel extends Component{
	state={
		searchInputText: ''
	}

	handleInputChange = ev => {
		const searchInputText = ev.target.value;
		this.setState({ searchInputText })
		this.props.handleSearchChange(searchInputText)
	}

	render() {
		return (
			<input 
				type="text"
				className="form-control SearchPanel"
				placeholder="type to search"
				onInput={this.handleInputChange}
			/>
		)
	}
	
}

export default SearchPanel;