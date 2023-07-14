import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home';
import LogIn from './pages/LogIn';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
