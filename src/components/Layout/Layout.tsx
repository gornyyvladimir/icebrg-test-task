import { Outlet } from 'react-router-dom';
import './styles.css';

const Layout = () => {
  return (
    <main className="layout">
      <Outlet />
    </main>
  );
};
export default Layout;
