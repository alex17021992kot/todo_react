import React, { Component } from 'react';
import AppHeader from '../AppHeader/AppHeader'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemAddForm from '../ItemAddForm/ItemAddForm';
import './App.css';
class App extends Component {
	state = {
		todoData: [
			this._createTodoItem('Drink coffee'),
			this._createTodoItem('MakeAwesome app'),
			this._createTodoItem('Have a lunch')
		],
		searchInputText: '',
		filterType: 'all'
	}

	_createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this._generateId()
		}
	}

	_getStatusTodos(todos) {
		const { filterType } = this.state
		if (filterType === 'done') {
			return todos.filter(todo => todo.done)
		} else if (filterType === 'active') {
			return todos.filter(todo => !todo.done)
		} else {
			return todos;
		}
	}

	render() {
		const { todoData, searchInputText, filterType } = this.state;
		const doneAmount = todoData.filter(todo => todo.done).length;
		const toDoAmount = todoData.length - doneAmount;
		const statusTodos = this._getStatusTodos(todoData);
		console.log(statusTodos);
		const searchedTodos = statusTodos.filter(todo => todo.label.toLowerCase().startsWith(searchInputText));
		return (
			<div className="App">
				<AppHeader toDo={toDoAmount} done={doneAmount} />
				<div className="top-panel d-flex">
					<SearchPanel 
						handleSearchChange={this.handleSearchChange}
					/>
					<ItemStatusFilter 
						filterType={filterType}
						handleStatusFilterChange={this.handleStatusFilterChange}
					/>
				</div>
				<TodoList
					todos={searchedTodos}
					deleteItem={this.deleteItem}
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant}
				/>
				<ItemAddForm
					addItem={this.addItem} 
				/>
			</div>
		)
	}

	handleSearchChange = text => {
		this.setState({
			searchInputText: text.toLowerCase()
		})
	}

	handleStatusFilterChange = text => {
		this.setState({
			filterType: text
		})
	}

	deleteItem = (id) => {
		this.setState(state => {
			const filteredArray = state.todoData.filter(todo => todo.id !== id);
			return {
				todoData: filteredArray
			}
		})
	}

	_generateId() {
		const idLength = 6;
		const str = 'abcdefghijklmnopqrstuvwxyz1234567890';
		let id = '';
		for(let i = 0; i < idLength; i++) {
			const index = Math.floor(Math.random() * str.length);
			id += str[index];
		}
		return id;
	}

	addItem = (text) => {
		const item = this._createTodoItem(text);

		this.setState(state => {
			const newTodoList = [...state.todoData, item];
			return {
				todoData: newTodoList
			}
		})
	}

	_toggleProperty(id, name) {
		this.setState(({ todoData }) => {
			const newAray = [...todoData];
			newAray.forEach(todo => {
				if (todo.id === id) {
					todo[name] = !todo[name];
				}
			})

			return {
				todoData: newAray
			}
		})
	}

	onToggleImportant = (id) => {
		this._toggleProperty(id, 'important');
	}

	onToggleDone = (id) => {
		this._toggleProperty(id, 'done');
	}
	
}

export default App;