import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login from './login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
} 

export default App;
