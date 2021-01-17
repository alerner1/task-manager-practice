import { useState } from 'react';

const InputBar = ({appHandleSubmit}) => {
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    appHandleSubmit(task);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputBar;