import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";
import { useHistory } from "react-router-dom";
const AdminHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <div class="menu" style={{background:"rgba(0,0,0,0.1)"}}>
      <div class="smartphone-menu-trigger"></div>
      <header class="avatar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eYaCWn-HDCtigW8CJIn7tPrb_cNH1fCf1NWKZGvhDePkRuuB8-ry0px4k_AmUZBT6SE&usqp=CAU" style={{width:"100px",
		   borderRadius: "50%",
			overflow:"hidden",
			border:"4px solid @color-1st",
			boxShadow:"0 0 0 4px rgba(255,255,255,0.2)"}}/>
        <h2 style={{fontWeight:"normal",
			marginBottom:"0"}}>Administrateur</h2>
      </header>
      <ul >
        <li tabindex="0" class="icon-post" style={{marginRight:"60px"}}>
        <i class="fa-solid fa-blog" style={{marginRight:"15px"}}></i><a href="/admin/table-posts">Publication</a>
        </li>
        <li tabindex="0" class="icon-users">
        <i class="fa-solid fa-users" style={{marginRight:"10px"}}></i><a href="/admin/table-users">Utilisateurs</a>
        </li>
        <li tabindex="0" class="icon-settings">
        <i class="fa-solid fa-arrow-right-from-bracket" style={{marginRight:"10px"}}></i><a onClick={handleLogout} style={{ cursor: "pointer" }}>Déconnexion</a>
        </li>
      </ul>

      {/* <nav>
                <ul id="topnav">
                    <li>
                        <a href="/admin">Home</a>
                    </li>
                    <li>
                        <a href="/admin/table-users">Users</a>
                    </li>
                    <li>
                        <a href="/admin/table-posts">Posts</a>
                    </li>
                    <li>
                        <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                            Logout
                        </a>
                    </li>
                </ul>
            </nav> */}
    </div>
  );
};

export default AdminHeader;
