import { GET_POST, GET_POSTS } from "../constant/post";

//initialstate
const initialState = {
    posts: [],
    myposts: [],
    errors: null,
    isAuth: false,
    loadpost: false,
    isEdit: false,
    edited: {},
};
//pure function =>(state,{type,payload})=>
const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POSTS:
            return { ...state, posts: payload };
        case GET_POST:
            return { ...state, myposts: payload, isAuth: true };
        default:
            return state;
    }
};
export default postReducer;
