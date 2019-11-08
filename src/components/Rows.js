import React from 'react';
import { PropTypes } from 'prop-types';
import Row from './Row';

const styles = {
	container: {
	    display: 'flex',
	    flexDirection: 'column',
	},
}

export default function Rows (props) {	
		const {
			taskList,
			onChangeTask,
			onTaskDone,
			showModal,
		} = props;

		return (
			<div style={styles.container}>
				{
					taskList.map((taskItem, id) => {
						return taskItem.visible ?
						<div 
							key={taskItem.id}
						>
							<Row
								taskItem={taskItem}
								onChangeTask={onChangeTask}
								onTaskDone={onTaskDone}
								showModal={showModal}
							/>
						</div> : ''
					})
				}
			</div>
		)
};

Rows.propTypes = {
	taskList: PropTypes.array.isRequired,
	onChangeTask: PropTypes.func.isRequired,
	onTaskDone: PropTypes.func.isRequired,
	showModal: PropTypes.func.isRequired,
}

Rows.defaultProps = {
	taskList: [],
}
