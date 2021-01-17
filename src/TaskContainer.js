import { useEffect } from 'react';
import TaskItem from './TaskItem';

const TaskContainer = ({ taskList }) => {
  // useEffect(() => {
  //   console.log(taskList)
  // }, [taskList])

  const mapTasks = () => {
    return taskList.map(task => {
      return <TaskItem task={task} />
    })
  }

  return (
    <article>
      <ul>
        {mapTasks()}
      </ul>
    </article>
  )
}

export default TaskContainer;