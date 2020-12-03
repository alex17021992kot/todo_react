import React, { Component } from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends Component {
	buttonsData = [
		{ label: 'All' },
		{ label: 'Active' },
		{ label: 'Done' }
	]
	btnClasses = {
		active: 'btn btn-info active',
		secondary: 'btn btn-outline-secondary'
	}

	handleButtonClick = ev => {
		const target = ev.target;
		if (target.classList.contains('active')) {
			return;
		}
		const text = ev.target.textContent.toLowerCase();
		this.props.handleStatusFilterChange(text);
	}

	render() {
		return (
			<div className="btn-group ItemStatusFilter">
				{
					this.buttonsData.map(button => {
						const { filterType } = this.props;
						const isChoosenElem = filterType === button.label.toLowerCase();
						const classes = isChoosenElem ? this.btnClasses.active : this.btnClasses.secondary;
						return (
							<button 
								type="button" 
								className={classes} 
								key={button.label}
								onClick={this.handleButtonClick}
							>
								{ button.label }
							</button>
						)
					})
				}
			</div>
		);
	}
}

export default ItemStatusFilter;