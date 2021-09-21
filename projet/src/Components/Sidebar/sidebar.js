import React, { useEffect } from "react";
import PostCard from "../../Pages/Post/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../Redux/action/post";
import "./Sidebar.css";

const Sidebar = () => {
    const posts = useSelector((state) => state.postReducer.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sideBarTitle"> ABOUT OUR SERVICES</span>
                {posts.map((el) => {
                    <PostCard post={el} key={el._id} />;
                })}
            </div>
        </div>
    );
};

export default Sidebar;
