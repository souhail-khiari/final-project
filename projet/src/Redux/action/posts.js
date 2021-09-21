import axios from "axios";
export const GET_POSTS = "GET_POSTS";
export const getPosts = () => {
    return (dispatch) => {
        return axios
            .get("/api/post/mypost", config)
            .then((res) => {
                dispatch({ type: GET_POSTS, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};