import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import { getIcon } from '../support/supportFunc';

const styles = {
	row: {
		width: '100%',
	    display: 'flex',
	    alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #e8e8e8',
        textAlign: 'center',
        fontFamily: 'calibri, verdana',
        background: 'white',
	},
	firstRow: {
		color: 'gray',
	},
	checkbox: {
		width: '5%',
	},
	item: {
		width: '100%',
	    wordBreak: 'break-word',
	    margin: '0px',
	},
	input: {
	    flex: '1 1',
	    paddingLeft: '10px',
        marginLeft: '5px',
        height: '1.5em',
	    margin: '.7em 17px',
	},
	manageButton: {
		padding: '8px',
	}
}

export default class Row extends React.Component {
	constructor() {
		super();
		this.state = {
			isChangableRow: false,
			newValue: '',
		}
		this.getLabelRow = this.getLabelRow.bind(this);
		this.getChangeRow = this.getChangeRow.bind(this);
		this.saveChangedValue = this.saveChangedValue.bind(this);
	}

	rowEditorToggler = (newValue) => {
		console.log('rowEditorToggler', newValue);
		const isChangableRow = this.state.isChangableRow;
		this.setState({ 
			isChangableRow: !isChangableRow,
			newValue: newValue.name,
		});
	}

	changeValue = (e) => {
		const newValue = e.target.value;
		this.setState({ newValue })
	}

	saveChangedValue = () => {
		const newValue = this.state.newValue;
		const params = {
			id: this.props.taskItem.id,
			value: newValue,
		}
		this.props.onChangeTask(params);
		this.setState({ isChangableRow: false })
	}

	getLabelRow = (taskItem, doneFunc = undefined, showModal) => {
		const isActive = taskItem.done ? 'inactive-task' : '';

		return <div style={styles.row} className={isActive}>
			<Checkbox 
				style={styles.checkbox}
				color="default"
				id={`${taskItem.id}`}
				className="task-checkbox"
				checked={taskItem.done}
				value={taskItem.done}
				onChange={(e, value) => {
					doneFunc({id: taskItem.id, done: value});
				}}
			/>
			<p style={styles.item}>
				{`${taskItem.name || ''}`}
			</p>
				{ !taskItem.done ? 
					getIcon("edit", styles.manageButton, this.rowEditorToggler, taskItem) : '' 
				}
				{  
					getIcon("delete", styles.manageButton, showModal, taskItem.id) 
				}
		</div>
	}
	getChangeRow = (taskItem, changeTask = undefined) => {
		return <div style={styles.row}>
			<input 
				value={this.state.newValue} 
				onChange={this.changeValue}
				style={styles.input}
			/>
			{ getIcon("save", styles.manageButton, this.saveChangedValue, changeTask) }
		</div>
	}

	render() {
		const {
			taskItem,
			onChangeTask,
			onTaskDone,
			showModal,
		} = this.props;

		return <div style={styles.row}>
			{
				this.state.isChangableRow ? 
				this.getChangeRow(taskItem, onChangeTask) : 
				this.getLabelRow(taskItem, onTaskDone, showModal) 
			}
		</div>
	}
};

Row.propTypes = {
	taskItem: PropTypes.object.isRequired,
	onChangeTask: PropTypes.func.isRequired,
	onTaskDone: PropTypes.func.isRequired,
	showModal: PropTypes.func.isRequired,
}

Row.defaultProps = {
	taskItem: [],
}

