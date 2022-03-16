const {
    REGISTER_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
} = require("../actions/types");

const initialState = {
    user: {},
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_USER:
            return { ...state, user: payload.user };
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: {} };
        case CURRENT_USER:
            return { ...state, user: payload.user };
        default:
            return state;
    }
};

export default userReducer;
