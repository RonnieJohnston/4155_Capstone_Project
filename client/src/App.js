import React from 'react';
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';
import NewReview from './components/NewReview';
import Logout from './components/Logout';

import './App.css';

function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/account' element={<Account />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/register' element={<Register />} />
              <Route path='/newReview' element={<NewReview />} />
          </Routes>
      </div>
  );
}

export default App;
