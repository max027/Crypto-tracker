import { Route, Routes} from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Watchlist from './components/Watchlist'
import Account from './components/Account'
import Login from './components/Login'
import Signup from './components/Signup'
import  Coin  from "./components/Coin";
import  Private_routes  from "./components/Private_routes";
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase_app'
function App() {
  const [loggedin, setloggedin] = useState(false); 
  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      if (user) {
       setloggedin(true); 
      }else{
        setloggedin(false);
      }
    })
  }, [])
  
  return (
    <>
    <Navbar loggedin_state={setloggedin} user_status={loggedin} />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route element={<Private_routes loggedin={loggedin}/>}>
    <Route path='/watchlist' element={<Watchlist/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/coin' element={<Coin/>}/>
    </Route>
    <Route path='/login'  element={<Login loggedin_state={setloggedin}/>}/>
    <Route path='/signup' element={<Signup loggedin_state={setloggedin} />}/>
    </Routes>

    </>
  )
}
export default App;
