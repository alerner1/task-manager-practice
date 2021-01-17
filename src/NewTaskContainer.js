import InputBar from './InputBar';

const NewTaskContainer = ({appHandleSubmit}) => {
  
  return(
    <div>
      <InputBar appHandleSubmit={appHandleSubmit} />
    </div>
  );
}

export default NewTaskContainer;