import React from 'react';
import './ListItem.css';
const ListItem = (props) => {

	const { 
		label, 
		deleteItem, 
		id,  
		onToggleDone, 
		onToggleImportant,
		important,
		done
	} = props;

	let classes = 'ListItem';
	if (done) {
		classes += ' done';
	}
	if (important) {
		classes += ' important';
	}
	return (
		<span className={classes}>
			<span
				className="ListItem-label"
				onClick={() => onToggleDone(id)}
			>
				{label}
			</span>

			<button 
				type="button"
				className="btn btn-outline-success btn-sm float-right"
				onClick={() => onToggleImportant(id)}
			>
				<i className="fa fa-exclamation" />
			</button>

			<button 
				type="button"
				className="btn btn-outline-danger btn-sm float-right"
				onClick={() => deleteItem(id)}
			>
				<i className="fa fa-trash-o" />
			</button>
		</span>
	)
}

export default ListItem;