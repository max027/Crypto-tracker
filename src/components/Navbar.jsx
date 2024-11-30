import { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router";
export default function Navbar() {

  let [menu,setmenu]=useState(false);
  let nav_class=`Nav-list ${menu?"open":""}`
  return (
    <nav className="Nav-Main">
    <div className="Nav-Home">
    <h1> <Link className="Nav-links" to="/"> Home</Link></h1>
    </div>
    <ul  className={nav_class}>
    <li className="Nav-list-item "><Link className="Nav-links" to="/watchlist">Watchlist</Link></li>
    <li className="Nav-list-item "><Link className="Nav-links" to="/account"> Account</Link></li>
    <li className="Nav-list-item "><Link className="Nav-links" to="/signup"> Signup</Link></li>
    </ul>
    <div className="Nav-icon">
      <svg  onClick={()=>{
        setmenu(!menu)
      }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </div>
    </nav>
  )
}
