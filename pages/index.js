import { useState } from 'react';
import { TASKS } from '../data';
import ColumnTitle from '../components/columns/column-title';
import TaskList from '../components/tasks/task-list';
import NoTaskScreen from '../components/tasks/no-task-screen';
import Button from '../components/ui/button';
import TaskForm from '../components/tasks/task-form';

const HomePage = () => {
  const [toggleTaskModal, setToggleTaskModal] = useState(false);

  function getTodoTasks() {
    return TASKS.filter((task) => task.status == 'Todo');
  }

  function addTaskModalHandler() {
    setToggleTaskModal(!toggleTaskModal);
  }

  const todoTask = getTodoTasks();
  // const todoTask = [];

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
        <div>
          <div className='row'>
            <ColumnTitle title='todo' quantity={todoTask.length} />
            <span>
              <button
                children={'+'}
                onClick={addTaskModalHandler}
                className='btn-small'
              />
            </span>
            <TaskForm
              toggleTaskModal={toggleTaskModal}
              showAddTaskModal={addTaskModalHandler}
            />
          </div>
          <div className='center-block'>
            <ul>
              <TaskList items={todoTask} />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default HomePage;
