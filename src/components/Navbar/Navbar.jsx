import "./Navbar.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">

      <div className="nav-logo">
        <h2>Amazon</h2>
      </div>

      <div className="navbar-item">
          <FaLocationDot />
          <div>
        <p>Deliver in</p>
        <h4>India</h4>
      </div>
      </div>
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search Amazon"
        />
        <button><FaSearch /></button>
      </div>

      <div className="navbar-item">
        <p>Hello user, Sign in here</p>
        <h4>Account & Lists</h4>
      </div>

      <div className="navbar-item">
        <p> your Returns</p>
        <h4>& your Orders</h4>
      </div>

      <div className="navbar-item">
          <FaShoppingCart />
        <h4>your Cart</h4>
      </div>

    </div>
  );
}

export default Navbar;