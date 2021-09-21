//import types

import {
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    EDIT_USER,
    GET_USER,
    TOGLLE_TRUE,
    TOGLLE_FALSE,
    GET_EDITED,
    GET_ONE,
    ADMIN_USER,
} from "../constant/user";

//initialstate
const initialState = {
    user: {},
    errors: null,
    isAuth: false,
    load: false,
    isEdit: false,
    edited: {},
    users: [],
    isAdmin: false,
};
//pure function =>(state,{type,payload})=>
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, load: true };
        //   payload:{token , msg , user }
        case REGISTER_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        //   payload: {token , msg , user}
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        case FAIL_USER:
            return { ...state, errors: payload, load: false };
        case CURRENT_USER:
            return { ...state, user: payload.user, isAuth: true };
        // case ADMIN_USER:
        //     return { ...state, user: payload.user, isAdmin: true };

        case EDIT_USER:
            return { ...state, user: payload.user, isAuth: true };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: {}, isAuth: false };
        case GET_USER:
            return { ...state, users: payload };
        case TOGLLE_TRUE:
            return { ...state, isEdit: true };
        case TOGLLE_FALSE:
            return { ...state, isEdit: false };
        case GET_EDITED:
            return { ...state, edited: payload };
        case GET_ONE:
            return { ...state, user: payload };

        default:
            return state;
    }
};
export default userReducer;
