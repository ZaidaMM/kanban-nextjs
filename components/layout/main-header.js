import Link from 'next/link';
import classes from './main-header.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>
          <img src='/assets/logo-light.svg' alt='logo' />
        </Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/tasks'>My Board</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
