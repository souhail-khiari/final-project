import axios from "axios";
import { DELETE_POST, GET_POST, GET_POSTS } from "../constant/post";
// import { FAIL_USER } from "../constant/user";

// import { current } from "./user";

export const getPost = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/post/mypost", config);
        dispatch({ type: GET_POST, payload: result.data.myposts });
    } catch (error) {
        console.log(error);
    }
};

export const getPosts = () => async (dispatch) => {
    try {
        let result = await axios.get("/api/post/allpost");
        dispatch([{ type: GET_POSTS, payload: result.data.posts }]);
    } catch (error) {
        console.log(error);
    }
};

export const addpost = (newPost, history) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        await axios.post("/api/post/createPost", newPost, config);
        dispatch(getPosts);
        dispatch(getPost);
        history.push("./profile");
    } catch (error) {
        console.log(error);
    }
};

export const deletePosts = (id) => async (dispatch) => {
    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        const res = await axios.delete(`/api/post/${id}`, config);
        dispatch({ type: DELETE_POST, payload: res.data });
        dispatch(getPost());
    } catch (error) {
        console.log(error);
    }
};
