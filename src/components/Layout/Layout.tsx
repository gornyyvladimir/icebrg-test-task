import { Outlet } from 'react-router-dom';
import './styles.css';

const Layout = () => (
  <main className="layout">
    <Outlet />
  </main>
);
export default Layout;
