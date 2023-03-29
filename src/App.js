import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import brandLogo from './assets/images/logo.svg'
import { Navbar } from './ui/bleedBlueReact'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar brandTitle='Money Bhai' brandLogoURL={brandLogo} /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
