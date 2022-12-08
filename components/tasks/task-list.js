import TaskItem from './task-item';

const TaskList = (props) => {
  const { items } = props;
  // console.log(props.items);

  return (
    <ul>
      {items.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          subtasks={task.subtasks}
          completedSubtask={task.subtasks}
        />
      ))}
    </ul>
  );
};
export default TaskList;
