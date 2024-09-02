import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { AuthContextProvider } from './contextAPI/AuthContext'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProtectedRoute from './components/ProtectedRoute'
import Account from './pages/Account'


function App() {
  return (
    <>
    <AuthContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}/>
      </Routes>
      </BrowserRouter>
    </AuthContextProvider>
    </>
    
  )
}

export default App
