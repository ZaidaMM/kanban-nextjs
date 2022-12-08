import classes from './task-form.module.css';
import ModalButton from '../ui/modal-button';

const TaskForm = ({ showAddTaskModal, toggleTaskModal }) => {
  return (
    <>
      {toggleTaskModal ? (
        <div className={classes.wrapper} onClick={showAddTaskModal}>
          <form className={classes.form} onClick={(e) => e.stopPropagation()}>
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
                  value=''
                  placeholder='e.g. Take coffee break'
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
                  value=''
                  placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
                ></textarea>
              </div>
            </div>
            <div className={classes.group}>
              <label htmlFor='subtasks' className={classes.label}>
                Subtasks
              </label>
              <div className={classes.input}>
                <input
                  type='text'
                  className={classes.control}
                  id='subtasks'
                  name='subtasks'
                  value=''
                  placeholder='e.g. Make coffee'
                />
                <span className='form-icon'>{/* <Icon /> */}</span>
              </div>
              <div className={classes.input}>
                <input
                  type='text'
                  className={classes.control}
                  id='subtasks'
                  name='subtasks'
                  value=''
                  placeholder='e.g. Drink coffee and smile'
                />
                <span className='form-icon'>{/* <Icon /> */}</span>
              </div>
            </div>
            <ModalButton />
            <div className={classes.group}>
              <label htmlFor='status' className={classes.label}>
                Status
              </label>
              <div className={classes.input}>
                <select
                  className={classes.control}
                  id='status'
                  name='status'
                  value='Todo'
                  placeholder='e.g. Take coffee break'
                >
                  <option value='todo'>Todo</option>;
                  <option value='doing'>Doing</option>;
                  <option value='done'>Done</option>;
                </select>
              </div>
            </div>
            <ModalButton />
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default TaskForm;
