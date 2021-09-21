import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Redux/action/post";
import PostCard from "./PostCard";
import "./PostList.css";

const PostList = () => {
    const posts = useSelector((state) => state.postReducer.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, );
    return (
        <div className="PostList">
            {posts.map((el) => (
                <PostCard post={el} key={el._id} />
            ))}
        </div>
    );
};

export default PostList;
