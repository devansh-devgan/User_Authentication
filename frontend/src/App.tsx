import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './Contexts/auth_context';
import Signup from './components/signup-form';
import Login from './components/login_form';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <AuthContext.Provider value={{ user: null, isAuthenticated: false, token: null, login: () => {}, logout: () => {} }}>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
