import classes from './task-item.module.css';
// import setupSubtasks from '../../utils/setupSubtasks';

const TaskItem = (props) => {
  const { subtasks } = props;
  console.log(subtasks);
  let completed = 0;
  const requiredSubtasks = subtasks.filter((x) => {
    if (x.isCompleted === true) {
      completed += 1;
    }
    console.log(completed);
  });

  // const completedSubtasks = Object.entries(subtasks).filter((x) =>
  //   requiredSubtasks.find((y) => console.log(y.isCompleted))
  // );
  // console.log(completedSubtasks);

  return (
    <li className={classes.task}>
      <p>{props.title}</p>
      <span>
        {completed} of {subtasks.length} subtasks
      </span>
    </li>
  );
};
export default TaskItem;
