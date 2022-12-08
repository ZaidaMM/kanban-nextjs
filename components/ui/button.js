import classes from './button.module.css';

const Button = ({ onClick, children }) => {
  return (
    <div>
      <button onClick={onClick} className={classes.btn}>
        {children}
      </button>
    </div>
  );
};
export default Button;
