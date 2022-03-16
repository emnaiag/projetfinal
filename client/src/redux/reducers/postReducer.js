import {
    GET_POSTS,
    GET_CURRENT_POST,
    GET_POST_DETAIL,
    ADD_COMMENT,
} from "../actions/types";
const initialState = {
    posts: [],
    myPosts: [],
    postDetail: null,
};

const postReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:
            return { ...state, posts: payload.posts };
        case GET_CURRENT_POST:
            return { ...state, myPosts: payload.currentPosts };
        case GET_POST_DETAIL:
            return {
                ...state,
                postDetail: payload.post,
            };
        case ADD_COMMENT:
            state.postDetail.comments.push(payload.comment);

        default:
            return state;
    }
};

export default postReducer;
