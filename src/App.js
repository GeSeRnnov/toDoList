import './App.css';
import { connect } from 'react-redux';
import TaskListView from './components/TaskListView'

const mapStateToProps = (store) => ({
	removeModal: store.showRemoveModal,
	taskList: store.taskList,
});

const mapDispatchToProps = dispatch => ({
	addNewTask: (task) => dispatch({ type: 'addNewTask', task }),
	changeTask: (params) => dispatch({ type: 'changeTask', params }),
	doneTask: (params) => dispatch({ type: 'doneTask', params }),
	toggleRemoveModal: (id) => dispatch({ type: 'toggleRemoveModal', id }),
	searchTasks: (name) => dispatch({ type: 'searchTask', name }),
	removeTask: () => dispatch({ type: 'removeTask' }),
})

const taskListApp = connect(mapStateToProps, mapDispatchToProps)(TaskListView);
export default taskListApp;


