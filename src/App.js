
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }>Appointment</Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
