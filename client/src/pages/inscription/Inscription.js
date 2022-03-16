import React, { useState } from "react";
import "./inscription.css";
import { inscription } from "../../redux/actions/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Inscription = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newUser, setNewUser] = useState();
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(inscription(newUser, history));
  };
  return (
    <div class="form-style-10">
      <h1>
        Connectez maintenant!
        <span>Connectez et dites-nous qu'est ce que vous pensez du site!</span>
      </h1>
      <form>
        <div class="section">
          <span>1</span>Username
        </div>
        <div class="inner-wrap">
          <label>
            Username{" "}
            <input type="text" name="username" onChange={handleChange} />
          </label>
        </div>

        <div class="section">
          <span>2</span>Email
        </div>
        <div class="inner-wrap">
          <label>
            Adresse email{" "}
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </div>

        <div class="section">
          <span>3</span>Mot de passe
        </div>
        <div class="inner-wrap">
          <label>
            Mot de passe{" "}
            <input type="password" name="password" onChange={handleChange} />
          </label>
        </div>
        <div class="button-section">
          <input type="submit" name="Sign Up" onClick={handleSubmit} />
          <span class="privacy-policy">
            <input type="checkbox" name="field7" />
            Vous acceptez nos conditions et notre politique.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Inscription;
