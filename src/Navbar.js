import './App.css'
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar-left">
           <Link to="/" className="link">cecil kong</Link>
        </div>
        <div className="navbar-right">
           <Link to="/games" className="link">games</Link>
           <Link to="/personal" className="link">personal art</Link>
           <Link to="/contact" className="link">contact</Link>
        </div>
    </div>
  );
}

export default Navbar;
