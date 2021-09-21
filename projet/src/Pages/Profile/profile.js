import React, { useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    current,

    // editUser,
    getEdited,
    toggleFalse,
    toggleTrue,
} from "../../Redux/action/user";
import { Button } from "react-bootstrap";
import { addpost, deletePosts, getPost } from "../../Redux/action/post";

import { Link } from "react-router-dom";
// import isAdmin from "../../../../middleware/isAdmin";

const Profile = () => {
    const user = useSelector((state) => state.userReducer.user);
    const myposts = useSelector((state) => state.postReducer.myposts);
    // const isAdmin = useSelector((state) => state.userReducer.isAdmin);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
        dispatch(getPost());
        dispatch(toggleFalse());
        // dispatch(deletePosts());
        // fetch("/mypost", {
        //     headers: {
        //         Authorization: "Bearer " + localStorage.getItem("jwt"),
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         console.log(result);
        //         setPosts(result.mypost);
        //     });
    }, []);
    return (
        <div className="row py-5 px-4">
            <div className="col-md-5 mx-auto">
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3">
                                <img
                                    style={{}}
                                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                    alt="..."
                                    width="130"
                                    className="rounded mb-2 img-thumbnail"
                                />
                                <Link to="/editProfile">
                                    <button
                                        className="btn btn-outline-dark btn-sm btn-block"
                                        style={{ color: "white" }}
                                        onClick={() => {
                                            dispatch(toggleTrue());
                                            dispatch(getEdited(user._id));
                                        }}
                                    >
                                        Edit profile
                                    </button>
                                </Link>
                            </div>
                            {/* {isAdmin ? <h4>Admin</h4> : <h4></h4>} */}
                            <div className="media-body mb-5 text-black">
                                <h4
                                    className="mt-0 mb-0"
                                    style={{ color: "white" }}
                                >
                                    {user && user.name}
                                </h4>
                                <p
                                    className="small mb-4"
                                    style={{ color: "white" }}
                                >
                                    {" "}
                                    <i
                                        className="fas fa-map-marker-alt mr-2"
                                        style={{ color: "white" }}
                                    ></i>
                                    {user && user.email}
                                </p>
                                <h4 style={{ color: "white" }}>
                                    <i
                                        className="fas fa-phone"
                                        style={{ color: "white" }}
                                    ></i>
                                    {user && user.phone}
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 py-3">
                        <h5 className="mb-0">About</h5>
                        <div className="p-4 rounded shadow-sm bg-light">
                            <p className="font-italic mb-0">
                                {user && user.job}
                            </p>
                        </div>
                    </div>
                    <div className="py-4 px-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            {/* <button
                                // style={{ color: "black" }}
                                className="btn btn-outline-light btn-sm btn-block"
                                // onClick={() => dispatch(addpost(myposts._id))}
                            >
                                <Link to="/createPost"> add Post</Link>
                            </button> */}
                            <Button variant="outline-secondary">
                                <Link to="/createPost"> add Post </Link>
                            </Button>
                        </div>
                        <div className="gallery">
                            <div className="gallery">
                                {myposts.map((el) => {
                                    <section className="border-bottom mb-4 pb-4">
                                        <div className="row">
                                            <div className="col-9">
                                                <p className="mb-2">
                                                    <strong>
                                                        {el.createdAt}
                                                    </strong>
                                                </p>
                                                <a
                                                    href=""
                                                    className="text-dark"
                                                >
                                                    <i className="fab fa-facebook-f me-1"></i>
                                                </a>
                                                <a
                                                    href=""
                                                    className="text-dark"
                                                >
                                                    <i className="fab fa-twitter me-1"></i>
                                                </a>
                                                <a
                                                    href=""
                                                    className="text-dark"
                                                >
                                                    <i className="fab fa-linkedin me-1"></i>
                                                </a>
                                                <p>{el.title}</p>
                                                <p>{el.body}</p>
                                            </div>
                                            <button
                                                color="primary"
                                                onClick={() => {
                                                    dispatch(
                                                        deletePosts(myposts._id)
                                                    );
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </section>;

                                    // return (
                                    //     <>
                                    //         <img
                                    //             key={el._id}
                                    //             src={el.photo}
                                    //             alt={el.title}
                                    //             className="item"
                                    //         />
                                    //         <button
                                    //             color="primary"
                                    //             onClick={() => {
                                    //                 dispatch(
                                    //                     deletePosts(
                                    //                         myposts._id
                                    //                     )
                                    //                 );
                                    //             }}
                                    //         >
                                    //             Delete
                                    //         </button>
                                    //     </>
                                    // );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
