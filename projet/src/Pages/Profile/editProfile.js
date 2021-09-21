import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../Redux/action/user";
import "./editProfile.css";

const EditProfile = (history) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        job: "",
        phone: 0,
    });

    const edit = useSelector((state) => state.userReducer.isEdit);
    const editedReducer = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.userReducer.user);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        edit
            ? setUser(editedReducer)
            : setUser({ name: "", email: "", job: "", phone: 0 });
    }, [edit, editedReducer]);
    return (
        <div className="well">
            <ul className="nav nav-tabs">
                <li className="active">
                    <a href="#home" data-toggle="tab">
                        Profile
                    </a>
                </li>
            </ul>
            <div id="myTabContent" className="tab-content">
                <div className="tab-pane active in" id="home">
                    <form id="tab">
                        <label>Username</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name || ""}
                            className="input-xlarge"
                            onChange={handleChange}
                        />
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={user.email || ""}
                            className="input-xlarge"
                            onChange={handleChange}
                        />
                        <label>job</label>
                        <input
                            type="text"
                            name="job"
                            value={user.job || ""}
                            className="input-xlarge"
                            onChange={handleChange}
                        />
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={user.phone}
                            className="input-xlarge"
                            onChange={handleChange}
                        />
                        <div>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    dispatch(editUser(editedReducer._id, user));
                                    history.push("/profile");
                                }}
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
