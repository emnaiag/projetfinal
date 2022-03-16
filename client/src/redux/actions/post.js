import {
    GET_POSTS,
    GET_CURRENT_POST,
    GET_POST_DETAIL,
    ADD_COMMENT,
} from "./types";
import axios from "axios";

export const get_posts = () => async (dispatch) => {
    try {
        let result = await axios.get("/post/");
        dispatch({ type: GET_POSTS, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const addPost = (post, history) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.post("/post/addPost", post, config);
        dispatch(get_posts());
        if (result.data.status === 201) {
            history.push("/");
        }
    } catch (error) {
        console.log(error);
    }
};

export const get_current_posts = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",

                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get("/post/getmyposts", config);
        dispatch({ type: GET_CURRENT_POST, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};
export const update_current_post = (id, updatePost) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",

                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.put(
            `/post/updateMyPost/${id}`,
            updatePost,
            config
        );
        dispatch(get_current_posts());
        dispatch(get_posts());
    } catch (error) {
        console.log(error);
    }
};
export const delete_current_post = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.delete(`/post/deletepost/${id}`, config);
        dispatch(get_current_posts());
    } catch (error) {
        console.log(error);
    }
};

export const get_post_detail = (id) => async (dispatch) => {
    try {
        let result = await axios.get(`/post/${id}`);

        dispatch({ type: GET_POST_DETAIL, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const add_Comment = (comment, id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: localStorage.getItem("token"),
                comment,
            },
        };

        let result = await axios.put(`/post/comment/${id}`, comment, config);
        dispatch({ type: ADD_COMMENT, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};
