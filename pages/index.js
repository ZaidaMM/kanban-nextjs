import ColumnTitle from '../components/columns/column-title';
import TaskList from '../components/tasks/task-list';
import { TASKS } from '../data';

const HomePage = () => {
  function getTodoTasks() {
    return TASKS.filter((task) => task.status == 'Todo');
  }

  const todoTask = getTodoTasks();

  return (
    <div>
      <div>
        <ColumnTitle title='todo' quantity={todoTask.length} />
      </div>
      <ul>
        <TaskList items={todoTask} />
      </ul>
    </div>
  );
};
export default HomePage;
