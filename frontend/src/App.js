// import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';
import Result from './components/result';

import Login from './components/login/Login';
import Register from './components/register/Register'

import {
  BrowserRouter as Router, 
  Routes, 
  Route

} from "react-router-dom";
import {useState} from 'react';
function App() {
  const [user,setLoginUser] = useState({

  })
  return (
    <>
        <Router>
    <Routes>
    
       <Route exact path="/" element={user && user._id ? <Home/>:<Login setLoginUser={setLoginUser} />}/>
       <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
       <Route path="/home" element={<Home/>}/>
     <Route path="/Register"element={<Register/>}/>
       <Route path="/result" element={<Result/>}/>
     </Routes>        
          </Router>
   

    </>
  );
}
/*

  <Route exact path="/" element={user && user._id ? <Home/>:<Login setLoginUser={setLoginUser} />}/>
  <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />

*/
export default App;




//  <Router>
// <Routes>

//   <Route exact path="/" element={user && user._id ? <Home/>:<Login setLoginUser={setLoginUser} />}/>
//   <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
//   <Route path="/Register"element={<Register/>}/>
//   <Route path="/result" element={<Result/>}/>
// </Routes>        
//       </Router>


      