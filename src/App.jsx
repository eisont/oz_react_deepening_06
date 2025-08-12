import './App.css';
import Home from './pages/admin/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/admin__dashboard/Dashboard';
import Users from './pages/admin__users/Users';
import UserDetail from './pages/admin__users/UserDetail';
import Settings from './pages/admin__settings/Settings';
import NotFound from './pages/admin__notfound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Dashboard />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/users/:id" element={<UserDetail />} />
          <Route path="admin/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
