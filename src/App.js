import { useState } from 'react';
import NewTaskContainer from './NewTaskContainer';
import TaskContainer from './TaskContainer';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const appHandleSubmit = (task) => {
    setTaskList(prev => ([
      ...prev, task
    ]))
  }

  return (
    <>
      <NewTaskContainer appHandleSubmit={appHandleSubmit} />
      <TaskContainer taskList={taskList} />
    </>
  );
}

export default App;
