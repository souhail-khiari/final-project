import React, { useEffect, useState } from "react";
import { getPosts } from "../../Redux/action/post";
import { getUser } from "../../Redux/action/user";
import "./header.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer.posts);
    console.log(posts);
    const [nameSearch, setNameSearch] = useState("");
    const [jobSearch, setJobSearch] = useState("");
    const getNameSearch = (input) => {
        setNameSearch(input);
    };
    const getJobSearch = (input) => {
        setJobSearch(input);
    };
    useEffect(() => {
        dispatch(getUser());
        dispatch(getPosts());
    }, []);
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">San3a Services provider</span>
            </div>
            <img
                className="headerImg"
                src="https://cairo.makerfaire.com/wp-content/uploads/sites/158/2019/11/San3a-Tech-1.png"
                alt="header"
            />
            <div className="input-group">
                <input
                    type="search"
                    placeholder="What're you searching for?"
                    aria-describedby="button-addon1"
                    className="form-control border-0 bg-light"
                    onChange={(e) => {
                        getNameSearch(e.target.value);
                        getJobSearch(e.target.value);
                    }}
                />
                <div className="input-group-append">
                    <Link to="/profileList">
                        <button
                            id="button-addon1"
                            type="submit"
                            className="btn btn-link text-primary"
                        >
                            <i className="fa fa-search"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
