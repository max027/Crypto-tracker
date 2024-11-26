import "./Navbar.css"
export default function Navbar() {

  return (
    <nav className="Nav-Main">
    <div className="Nav-Home">
    <h1>Home</h1>
    </div>
    <ul className="Nav-list">
    <li className="Nav-list-item">Watchlist</li>
    <li className="Nav-list-item">Account</li>
    </ul>
    <div className="Nav-icon">
      <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </div>
    </nav>
  )
}
