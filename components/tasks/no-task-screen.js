import Button from '../ui/button';
import classes from './no-task-screen.module.css';
import TaskForm from '../tasks/task-form';

const NoTaskScreen = ({ showAddTaskModal, toggleTaskModal }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h1>There are no Tasks in your Board</h1>
        <Button children={'Add New Task'} onClick={showAddTaskModal} />
        <TaskForm
          toggleTaskModal={toggleTaskModal}
          showAddTaskModal={showAddTaskModal}
        />
      </div>
    </div>
  );
};
export default NoTaskScreen;
