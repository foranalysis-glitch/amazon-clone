import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <div className="navbar">

        <div className="mobile-menu">
          <FaBars />
        </div>

        <div className="nav-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEsLucn6b9xPwccsc6dyYNBBCfpJ8-tVMUQ&s"
            alt="Amazon"
          />
        </div>

        <div className="mobile-user">
          <FaUserCircle />
        </div>

        <div className="nav-cart">
          <BsCart3 />
          <span>Cart</span>
        </div>

      </div>

      <div className="nav-search">
       <input
  type="text"
  placeholder="Search Amazon"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

        <button>
          <FaSearch />
        </button>
      </div>

      <div className="mobile-location">
        📍 Deliver in India
      </div>
    </>
  );
}

export default Navbar;