import { useState} from "react"
import "./Navbar.css"
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase_app";
import {signOut } from "firebase/auth";

export default function Navbar({loggedin_state,user_status}) {

  let [menu,setmenu]=useState(false);
  const [search_val, setsearch_val] = useState("");
  let nav_class=`Nav-list ${menu?"open":""}`
  const navigate=useNavigate(); 
  const logout=()=>{
   signOut(auth).then(()=>{
     console.log("signout success"); 
     loggedin_state(false);
     navigate("/signup");
   }).catch((error)=>{
     console.log(error);
   })
  }
  return (
    <nav className="Nav-Main">
    <div className="Nav-Home">
    <h1> <Link className="Nav-links" to="/"> Home</Link></h1>
    </div>
    <div className="Nav-search">
    <input className="Search" onChange={(e)=>setsearch_val(e.target.value)} value={search_val} type="text" placeholder="Search.."></input>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>navigate('/search',{state:{coin:search_val}})} height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
    </div>
    </div>
    <ul  className={nav_class}>
    <li className="Nav-list-item "><Link className="Nav-links" to="/watchlist">Watchlist</Link></li>
    {
      user_status?<li className="Nav-list-item logout" onClick={logout}>Logout</li>:<li className="Nav-list-item "><Link className="Nav-links" to="/signup">Signup</Link></li>
    }
    </ul>
    <div className="Nav-icon">
      <svg  onClick={()=>{
        setmenu(!menu)
      }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </div>
    </nav>
  )
}
