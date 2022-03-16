import { GET_USERS, DELETE_POST } from "./types";
import { get_posts } from "./post";
import axios from "axios";

export const get_users = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/admin", config);
    dispatch({ type: GET_USERS, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.delete(`/admin/deletePost/${id}`, config);
    dispatch(get_posts());
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = (id) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: localStorage.getItem("token"),
        },
      };
      let result = await axios.delete(`/admin/deleteUser/${id}`, config);
      dispatch(get_users());
    } catch (error) {
      console.log(error);
    }
  };