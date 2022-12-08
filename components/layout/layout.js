import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants';
import MainHeader from './main-header';

const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
