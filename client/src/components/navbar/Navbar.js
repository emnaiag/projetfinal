import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { logout } from "../../redux/actions/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Navbar = ({ categoriePost, handleSearch }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.go(0);
  };
  return (
    <div className="nav">
      <div className="navleft">
        <img src="family.png" height={120}></img>
      </div>
      <div className="navcenter">
        <ul className="list">
          <li>
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
         
          
          <li>
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li>
            <Link className="link" to="/apropos">
              A PROPOS
            </Link>
          </li>
          <li>
            <Link className="link" to="/partage">
              PARTAGE
            </Link>
          </li>
          {localStorage.getItem("token") ? (
            <h4 onClick={handleLogout} style={{ cursor: "pointer" }}>
              LOGOUT
            </h4>
          ) : null}
        </ul>
      </div>
      <div className="navright">
        <input
          type="search"
          className="inputSearch"
          placeholder="Selon catégorie... "
          value={categoriePost}
          onChange={handleSearch}
        />
        <i className="searchicon fa-solid fa-magnifying-glass"></i>
        <Link to="/login">
          <input
            type="button"
            className="btn"
            value="Login"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
