import axios from "axios";
import { REGISTER_USER, LOGIN_USER, CURRENT_USER, LOGOUT_USER } from "./types";

export const inscription = (newUser, history) => async (dispatch) => {
    try {
        let result = await axios.post("/user/inscription", newUser);
        if (result.data.status) {
            dispatch({ type: REGISTER_USER, payload: result.data });
            history.push("./login");
        } else {
            alert(result.data.msg);
        }
    } catch (error) {
        console.log(error.response.data.message);
    }
};

export const login = (user, history) => async (dispatch) => {
    try {
        let result = await axios.post("user/login", user);
        if (result.data.status) {
            dispatch({ type: LOGIN_USER, payload: result.data });
            history.push("/");
            history.go(0);
        } else {
            alert(result.data.msg);
        }
    } catch (error) {
        console.log(error);
    }
};
export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("user/current", config);
        if (result.data.status) {
            dispatch({ type: CURRENT_USER, payload: result.data });
        } else {
            console.log(result.data.msg);
        }
    } catch (error) {
        console.log(error);
    }
};
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};
