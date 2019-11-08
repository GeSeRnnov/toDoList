import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Modal from './Modal';
import Rows from './Rows';
import RemoveConfirm from './RemoveConfirm';
import AddTask from './AddTask';

const styles = {
	container: {
		width: '700px',
    	margin: 'auto',
    	boxShadow: '1px 2px 5px #bbb',
    	marginTop: '100px',
	},
	content: {
		width: '40%',
		background: 'white',
	    display: 'flex',
        flexDirection: 'column',
    	justifyContent: 'flex-start',
    	alignItems: 'center',
    	minHeight: '300px',
	    borderRadius: '2px',
	},
	head: {
	    width: '100%',
	    background: '#777',
	    textAlign: 'center',
	    fontFamily: 'calibri',
	    color: 'white',
	    fontSize: '2em',
	},
	tasks: {
	    width: '100%',
	    display: 'flex',
        flexDirection: 'column',
    	justifyContent: 'flex-start',
    	alignItems: 'center',
	}
}

export default class TaskListView extends React.Component {

	render() {
		const {
			removeModal = false,
			taskList = [],
			removeTask,
			addNewTask,
			changeTask,
			doneTask,
			searchTasks,
			toggleRemoveModal,
		} = this.props;


		return (
			<div style={styles.container} >
				<Header 
					taskList={taskList}
					searchTask={searchTasks}
				/>				
				<Rows 
					taskList={taskList}
					onChangeTask={changeTask}
					onTaskDone={doneTask}
					showModal={toggleRemoveModal}
				/>
				<AddTask
					saveField={addNewTask}
				/>
				{	removeModal ?
					<Modal removeModal={removeModal}>
						<RemoveConfirm
							confirmRemove={removeTask}
							cancelRemove={toggleRemoveModal}
						/>
					</Modal> :
					undefined
				}
			</div>
		)
	}
};

TaskListView.propTypes = {
	removeModal: PropTypes.bool.isRequired,
	taskList: PropTypes.array.isRequired,
	toggleRemoveModal: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired,
	searchTasks: PropTypes.func.isRequired,
}

TaskListView.defaultProps = {
	removeModal: false,
	taskList: [],
}