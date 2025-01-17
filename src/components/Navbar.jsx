import { useState} from "react"
import "./Navbar.css"
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase_app";
import {signOut } from "firebase/auth";

export default function Navbar({loggedin_state,user_status}) {

  let [menu,setmenu]=useState(false);
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
    <ul  className={nav_class}>
    <li className="Nav-list-item "><Link className="Nav-links" to="/watchlist">Watchlist</Link></li>
    <li className="Nav-list-item "><Link className="Nav-links" to="/account"> Account</Link></li>
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
