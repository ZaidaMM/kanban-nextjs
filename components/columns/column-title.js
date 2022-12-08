import classes from './column-title.module.css';

const ColumnTitle = ({ title, quantity }) => {
  return (
    <div className={classes.title}>
      {title} ({quantity})
    </div>
  );
};
export default ColumnTitle;
