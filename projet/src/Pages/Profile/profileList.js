import React, { useEffect } from "react";
import ProfileCard from "./profileCard";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/action/user";
import "./profileList.css";
const ProfileList = ({ jobSearch, nameSearch }) => {
    const users = useSelector((state) => state.userReducer.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, []);
    return (
        <div className="ProfileList">
            {users
                .filter(
                    (el) => el.job.includes(jobSearch)
                    //       "".toLowerCase().includes(jobSearch.toLowerCase())
                    //      .includes(jobSearch)
                    // && el.name || ""
                    //     .toLowerCase()
                    //     .includes(nameSearch.toLowerCase())
                )
                .map((el) => (
                    <ProfileCard user={el} key={el._id} />
                ))}
        </div>
    );
};

export default ProfileList;
