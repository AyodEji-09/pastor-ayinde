import { LuContact } from "react-icons/lu";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { BsBook, BsMusicNoteBeamed } from "react-icons/bs";

import logo from "../../assets/images/logo/logo_main.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-white shadow fixed-top">
          <Link className="navbar-brand m-0 p-0" to="/">
            <img src={logo} alt="logo" width="150" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar--icon">
              <CgMenuGridR />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <div className="nav-icon">
                    <AiFillHome className="mr-3 ml-2 position-relative" />
                  </div>
                  <div>Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <div className="nav-icon">
                    <BiNotepad className="mr-3 ml-2 position-relative" />
                  </div>
                  <div>About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">
                  <div className="nav-icon">
                    <BsBook className="mr-3 ml-2 position-relative" />
                  </div>
                  <div>Books</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/musics">
                  <div className="nav-icon">
                    <BsMusicNoteBeamed className="mr-3 ml-2 position-relative" />
                  </div>
                  <div>Musics</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <div className="nav-icon">
                    <LuContact className="mr-3 ml-2 position-relative" />
                  </div>
                  <div>Contact</div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
