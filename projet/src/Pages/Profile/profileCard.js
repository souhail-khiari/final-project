import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import "./profileCard.css";

const ProfileCard = ({ user }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(current());
        // dispatch(getEdited());
    }, []);
    return (
        <div className="card">
            <div className="col-md-4">
                <div className="card">
                    <img
                        src="https://images.unsplash.com/photo-1507183711269-1235bed98f14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHByaWZpbGUlMjBjYXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        className="card-img-top"
                        width="130"
                        alt="..."
                    />
                    <div className="card-body">
                        <h6 className="card-title">{user.name}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {user.phone}
                        </h6>

                        <h6 className="card-text">{user.job || "nothing"}</h6>
                        <h2>{"⭐".repeat(4)}</h2>
                        <Link to="/profile">Visit Profile</Link>
                        {/* <button
                            className=""
                            style={{ color: "black" }}
                            onClick={(e) => e.preventDefault()}
                        >
                            <Link to={`/profile/${user._id}`}>Visit Profile </Link>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileCard;
