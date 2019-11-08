import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { getAmount } from '../support/supportFunc';

const styles = {
	head: {
	    width: '100%',
	    background: '#777',
	    textAlign: 'center',
	    fontFamily: 'calibri',
	    color: 'white',
	    fontSize: '2em',
	    display: 'flex',
	    justifyContent: 'space-between',
	},
	statistic: {
		textAlign: 'left',
	    fontSize: '.5em',
	    padding: '5px 0px',
	    fontWeight: 'bold',
	    paddingLeft: '5px',
	},
	search: {
		margin: '0',
    	marginRight: '1em',
	},
	title: {
		display: 'flex',
    	alignItems: 'center',
	}
}

export default function TaskListView(props) {
	const {
		searchTask,
	} = props;

	return (
		<div style={styles.head}>
			<div style={styles.statistic}>
				Всего: {props.taskList.length}<br/>
				Выполнено: {getAmount(props.taskList, 1)}<br/>
				Осталось: {getAmount(props.taskList, 0)}
			</div>
			<div style={styles.title}>
				Список задач
			</div>
			<div>
				<TextField
			        label="Поиск"
			        style={styles.search}
			        margin="normal"
					onChange={(e) => searchTask(e.target.value)}
		      	/>
			</div>
		</div>
			
	)
};

TaskListView.propTypes = {
	searchTask: PropTypes.func.isRequired,
}