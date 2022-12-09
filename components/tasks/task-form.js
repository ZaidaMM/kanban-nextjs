import { useRef, useState, useEffect } from 'react';
import classes from './task-form.module.css';
import Button from '../ui/button';

const TaskForm = ({ showAddTaskModal, toggleTaskModal }) => {
  const [counter, setCounter] = useState(0);
  const [inputs, setInputs] = useState([]);

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const subtasksInputRef = useRef([]);
  const statusInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredSubtasks = subtasksInputRef.current.value;
    const enteredStatus = statusInputRef.current.value;

    setInputs(enteredSubtasks);

    const taskData = {
      title: enteredTitle,
      description: enteredDescription,
      subtasks: enteredSubtasks,
      status: enteredStatus,
    };
    console.log(taskData);
  }

  const addsubtaskHandler = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const subtasksArray = Array.from(Array(counter));

  return (
    <>
      {toggleTaskModal ? (
        <div className={classes.wrapper} onClick={showAddTaskModal}>
          <form
            className={classes.form}
            onClick={(e) => e.stopPropagation()}
            onSubmit={submitHandler}
          >
            <h3 className={classes.title}>Add New Task</h3>
            <div className={classes.group}>
              <label htmlFor='title' className={classes.label}>
                Title
              </label>
              <div className={classes.input}>
                <input
                  type='text'
                  className={classes.control}
                  id='title'
                  name='title'
                  placeholder='e.g. Take coffee break'
                  ref={titleInputRef}
                />
              </div>
            </div>
            <div className={classes.group}>
              <label htmlFor='description' className={classes.label}>
                Description
              </label>
              <div className={classes.input}>
                <textarea
                  className={classes.control}
                  id='description'
                  name='description'
                  placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
                  ref={descriptionInputRef}
                ></textarea>
              </div>
            </div>
            <div className={classes.group}>
              <label htmlFor='subtasks' className={classes.label}>
                Subtasks
              </label>
              <div className={classes.input}>
                {/* <input
                  type='text'
                  className={classes.control}
                  id='subtasks'
                  name='subtasks'
                  placeholder='e.g. Make coffee'
                  ref={subtasksInputRef}
                /> */}
                {subtasksArray.map((item, index) => {
                  return (
                    <input
                      key={index}
                      type='text'
                      className={classes.control}
                      id='subtasks'
                      name='subtasks'
                      value={item}
                      placeholder='e.g. Make coffee'
                      ref={subtasksInputRef}
                    />
                  );
                })}
                <div className='form-icon'>{/* <Icon /> */}</div>
              </div>
            </div>
            <button
              type='button'
              className={classes.subtask}
              children={'+ Add New Subtask'}
              onClick={addsubtaskHandler}
            />
            <div className={classes.group}>
              <label htmlFor='status' className={classes.label}>
                Status
              </label>
              <div className={classes.input}>
                <select
                  className={classes.control}
                  id='status'
                  name='status'
                  placeholder='e.g. Take coffee break'
                  ref={statusInputRef}
                >
                  <option value='todo'>Todo</option>;
                  <option value='doing'>Doing</option>;
                  <option value='done'>Done</option>;
                </select>
              </div>
            </div>
            <button children={'Submit'} className={classes.btnBlock} />
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default TaskForm;
