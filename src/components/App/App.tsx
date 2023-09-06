import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Login from '../../pages/Login/Login';
import Main from '../../pages/Main/Main';
import NotFound from '../../pages/NotFound/NotFound';
import RequireAuth from '../RequireAuth/RequireAuth';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<RequireAuth />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>
);

export default App;
