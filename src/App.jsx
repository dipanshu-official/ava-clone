import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Demo from './pages/Demo';
import AfterLogin from './screen/AfterLogin';


const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Demo />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/AfterLogin' element={<AfterLogin />} />


        </Routes>

      </Router>

    </div>
  )
}

export default App