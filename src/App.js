import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase_setup/firebase'
import { useState, useEffect } from 'react'

function App() {
  
  let [loggedIn, setLoggedIn] = useState(null)

  useEffect(()=>{
      onAuthStateChanged(auth, (user)=> {
          if (user) {
              setLoggedIn(user)
          }
      })
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route
            path='/'
            element={<Home/>} 
            />
            <Route 
            path='/login' 
            element={<LogIn />} 
            />
            <Route path='/register' element={<Register/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
