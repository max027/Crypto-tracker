import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Watchlist from './components/Watchlist'
import Account from './components/Account'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/watchlist' element={<Watchlist/>}/>
    <Route path='/account' element={<Account/>}/>
    </Routes>
    </>
  )
}

export default App
