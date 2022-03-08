import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import Home from './components/home/home';
import Write from './components/write/write';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Myblogs from './components/myblogs/myblogs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/write' element={<Write/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/myblogs' element={<Myblogs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
