import React from 'react';
import ListItem from '../ListItem/ListItem';
import './TodoList.css';
const TodoList = ({ todos, deleteItem, onToggleDone,  onToggleImportant}) => {
	return (
		<ul className="TodoList list-group">
			{
				todos.map((todo) => {
					const { id, ...todoProps } = todo;
					return (
						<li key={id} className="list-group-item">
							<ListItem 
								{...todoProps}
								id={id}
								deleteItem={deleteItem}
								onToggleDone={onToggleDone}
								onToggleImportant={onToggleImportant}
							/>
						</li>
					)
					
				})
			}
		</ul>
	)
}

export default TodoList;