import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">OLMA Booking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <NavLink to="/login" className="navButton">Login</NavLink>
            <NavLink to="/login" className="navButton">Register</NavLink>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
