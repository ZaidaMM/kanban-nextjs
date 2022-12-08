import { useState } from 'react';
import ColumnTitle from '../components/columns/column-title';
import TaskList from '../components/tasks/task-list';
import NoTaskScreen from '../components/tasks/no-task-screen';
import { TASKS } from '../data';

const HomePage = () => {
  const [toggleTaskModal, setToggleTaskModal] = useState(false);

  function getTodoTasks() {
    return TASKS.filter((task) => task.status == 'Todo');
  }

  function addTaskModalHandler() {
    // console.log('Show modal');
    setToggleTaskModal(!toggleTaskModal);
  }

  // const todoTask = getTodoTasks();
  const todoTask = [];

  return (
    <div>
      {!todoTask || todoTask.length === 0 ? (
        <>
          <NoTaskScreen
            showAddTaskModal={addTaskModalHandler}
            toggleTaskModal={toggleTaskModal}
          />
        </>
      ) : (
        <>
          <div>
            <ColumnTitle title='todo' quantity={todoTask.length} />
          </div>
          <ul>
            <TaskList items={todoTask} />
          </ul>
        </>
      )}
    </div>
  );
};
export default HomePage;
