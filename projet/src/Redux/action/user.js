import axios from "axios";
import {
    LOAD_USER,
    REGISTER_USER,
    FAIL_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
    GET_USER,
    // EDIT_USER,
    GET_EDITED,
    TOGLLE_TRUE,
    TOGLLE_FALSE,
    GET_ONE,
    ADMIN_USER,
} from "../constant/user";

export const register = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/register", user);
        dispatch({ type: REGISTER_USER, payload: result.data });
        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/login", user);
        dispatch({ type: LOGIN_USER, payload: result.data }); //{msg,token,user}
        history.push("./profile");
    }
     catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/user/current", config);
        dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

// export const Admin = () => async (dispatch) => {
//     try {
//         const config = {
//             headers: {
//                 authorization: localStorage.getItem("token"),
//             },
//         };
//         let result = await axios.get("/api/user/admin", config);
//         dispatch({ type: ADMIN_USER, payload: result.data });
//     } catch (error) {
//         dispatch({ type: FAIL_USER, payload: error.response.data });
//     }
// };

export const getUser = () => async (dispatch) => {
    try {
        let result = await axios.get("/api/user/profileList");
        dispatch({ type: GET_USER, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const getOne = (id, history) => async (dispatch) => {
    try {
        let result = await axios.get(`/api/user/${id}`);
        dispatch({ type: GET_ONE, payload: result.data });
        history.push("./profile");
    } catch (error) {
        console.log(error);
    }
};

export const editUser = (id, newUser) => async (dispatch) => {
    try {
        await axios.put(`/api/user/${id}`, newUser);
        dispatch(current());
    } catch (error) {
        console.log(error);
    }
};

export const getEdited = (id, history) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/user/${id}`);
        dispatch({ type: GET_EDITED, payload: res.data.user });
        // history.push("/profile");
    } catch (error) {
        console.log(error);
    }
};
export const toggleTrue = () => {
    return {
        type: TOGLLE_TRUE,
    };
};
export const toggleFalse = () => {
    return {
        type: TOGLLE_FALSE,
    };
};
export const logout = (history) => {
    return { type: LOGOUT_USER };
    // history.push("/login");
};

export const videErrors = () => {
    return {
        type: "VIDE_ERRORS",
    };
};
