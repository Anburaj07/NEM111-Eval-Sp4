import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/signup"} element={<SignUp/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/posts"} element={<Posts/>}/>
      </Routes>
    </div>
  );
}

export default App;
