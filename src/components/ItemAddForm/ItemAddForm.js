import React, { Component } from 'react';
import './ItemAddForm.css';
class ItemAddForm extends Component {

	state = {
		label: ''
	}

	onLabelChange = (ev) => {
		this.setState({
			label: ev.target.value
		})
	}

	handleSubmit = ev => {
		ev.preventDefault();
		this.props.addItem(this.state.label);
		this.setState({
			label: ''
		})
	}

	render() {
		const { label } = this.state;
		return (
			<form 
				className="ItemAddForm d-flex"
				onSubmit={this.handleSubmit}
			>
				<input 
					type="text"
					value={label}
					className="form-control"
					onChange={this.onLabelChange}
					placeholder="What need to do?"
				/>
				<button 
					type="submit"
					className="btn btn-outline-secondary"
				>
					Add item
				</button>
			</form>
		)
	}
}

export default ItemAddForm;