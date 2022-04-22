
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import Foter from './Shared/Footer/Foter';
import Login from './Pages/Login/Login';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Shared/NotFound/NotFound';
import Register from './Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/service/:id' element={<ServiceDetail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut/>
        </RequireAuth>}/>
        <Route path='/addservice' element={<RequireAuth>
          <AddService/>
        </RequireAuth>}/>
        <Route path='/manageservice' element={<RequireAuth>
          <ManageServices/>
        </RequireAuth>}/>
     
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Foter/>
     
    </div>
  );
}

export default App;
