import { GET_POSTS } from "../actions/posts.actions";
const initialState = {
};
export default function allPostsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        default:
            return state;
    }
}