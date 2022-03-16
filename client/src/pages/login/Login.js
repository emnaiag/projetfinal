import "./login.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user";
const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [userLogin, setUserLogin] = useState();
    const handleChange = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(userLogin, history));
    };
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>E-mail</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Saisir votre e-mail"
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Saisir votre password"
                    onChange={handleChange}
                />
                <button className="loginButton" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
