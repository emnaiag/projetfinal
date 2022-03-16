import React, { useEffect } from "react";
import "./users.css";
import { useDispatch, useSelector } from "react-redux";
import { get_users, deleteUser } from "../../../redux/actions/admin";
const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_users());
  }, []);

  const users = useSelector((state) => state.adminReducer.users);
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <div class="wrapper">
      <h1 className="titre-tab">Liste des utilisateurs</h1>
      <div class="table">
        <div class="row header blue">
          <div class="cell">Utilisateur</div>
          <div class="cell">Email</div>
          <div class="cell">Modification</div>
        </div>

        {users &&
          users.map((user) => {
            return (
              <div class="row">
                <div class="cell" data-title="Username">
                  {user.username}
                </div>
                <div class="cell" data-title="Email">
                  {user.email}
                </div>
                <div class="cell" data-title="Password">
                  
                  <button onClick={() => handleDelete(user._id)}><i class="fa-solid fa-trash-can" style={{color:"red"}}></i></button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Users;
