import Button from '../ui/button';
import TaskForm from './task-form';

const AddTaskModal = ({ children, showAddTaskModal, toggleTaskModal }) => {
  return (
    <div>
      <Button children={children} onClick={showAddTaskModal} />
      <TaskForm
        toggleTaskModal={toggleTaskModal}
        showAddTaskModal={showAddTaskModal}
      />
    </div>
  );
};
export default AddTaskModal;
