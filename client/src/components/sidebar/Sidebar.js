import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <p>
        NE LOUPEZ PLUS RIEN ! UN RÉSUMÉ,
        <br />
        UNE FOIS PAR MOIS !
      </p>
      <hr />
      <input type="text" placeholder="Votre adresse e-mail" />
      <Link to="/Inscription">
        <input
          type="button"
          className="btn"
          value="S'INSCRIE"
          style={{ pointer: "cursor" }}
        />
      </Link>
      <p style={{ marginTop: "50px" }}>NOS CATEGORIES</p>
      <hr />
      <div className="categorie">
        <p>Actualité</p>
        <p>Comprendre la famille</p>
        <p>Food-Hygiène-Soins</p>
        <p>Education</p>
        <p>Loisirs et sorties</p>
        <p>Mode-Textile</p>
        <p>Psycologie</p>
      </div>
      <p> RETROUVEZ-NOUS</p>
      <hr />
      <i className="socialIcon fa-brands fa-facebook-square"></i>
      <i className="socialIcon fa-brands fa-twitter-square"></i>
      <i className="socialIcon fa-brands fa-instagram-square"></i>
      <i className="socialIcon fa-brands fa-pinterest-square"></i>
      <i className="socialIcon fa-brands fa-youtube-square"></i>
    </div>
  );
};

export default Sidebar;
