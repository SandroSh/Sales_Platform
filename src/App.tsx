import { Route, Routes } from 'react-router'
import HomePage from './components/HomePage/HomePage'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import './App.css'

import Contact from './components/Contact/Contact'
function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </main>
  )
}

export default App
