import { FaRegAddressCard } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { BsBook, BsMusicNoteBeamed } from "react-icons/bs";
import logo from "../../assets/images/logo/logo_main.png";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm position-fixed w-100">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" width="100" />
          </NavLink>
          <button
            className="btn btn-outline-primary p-0 fs-1 d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar--icon">
              <CgMenuGridR />
            </span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item me-5 my-sm-1 my-1 my-lg-0">
                <NavLink className="nav-NavLink d-flex align-items-center" aria-current="page" to="/">
                  <AiFillHome style={{ marginRight: "5px" }} /> Home
                </NavLink>
              </li>
              <li className="nav-item me-5 my-sm-1 my-1 my-lg-0">
                <NavLink className="nav-NavLink d-flex align-items-center" to="/about">
                  <AiOutlineProfile style={{ marginRight: "5px" }} />
                  About
                </NavLink>
              </li>
              <li className="nav-item me-5 my-sm-1 my-1 my-lg-0">
                <NavLink className="nav-NavLink d-flex align-items-center" to="/books">
                  <BsBook style={{ marginRight: "5px" }} />
                  Books
                </NavLink>
              </li>
              <li className="nav-item me-5 my-sm-1 my-1 my-lg-0">
                <NavLink className="nav-NavLink d-flex align-items-center" to="/songs">
                  <BsMusicNoteBeamed style={{ marginRight: "5px" }} />
                  Songs
                </NavLink>
              </li>
              <li className="nav-item me-5 my-sm-1 my-1 my-lg-0">
                <NavLink
                  className="nav-NavLink d-flex align-items-center"
                  to="/contact"
                >
                  <FaRegAddressCard style={{ marginRight: "5px" }} /> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
