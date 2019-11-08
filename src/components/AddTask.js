import React from 'react';
import PropTypes from 'prop-types';

const styles = {
	container: {
	    display: 'flex',
	    padding: '5px',
	    background: '#eee',
	    paddingBottom: '5px',
	},
	input: {
	    flex: '1 1',
	    paddingLeft: '10px',
	},
	button: {
		color: '#555',
	    border: '1px solid #ccc',
	    padding: '3px 6px',
	    borderRadius: '2px',
	    background: '#ddd',
	    marginLeft: '15px',
	},
}

export default class AddTask extends React.Component {
	constructor() {
		super();
		this.state = { newtask: ''};
		this.changeTextField = this.changeTextField.bind(this);
		this.saveNewTask = this.saveNewTask.bind(this);
	}

	changeTextField(e) {
		const value = e.target.value;
		this.setState({ newtask: value });
	}

	saveNewTask() {
		const newTask = this.state.newtask;
		this.props.saveField(newTask);
	}

	render() {
		return (
			<div style={styles.container}>
				<input 
					type="text" 
					placeholder="Введите новое задание" 
					style={styles.input} 
					onChange={this.changeTextField}
				/>
				<div 
					style={styles.button}
					onClick={this.saveNewTask}
				>
					Добавить
				</div>
			</div>
		)
	}
}

AddTask.propTypes = {
	saveField: PropTypes.func.isRequired,
}