import React, { useState, useEffect } from "react";
import { addpost } from "../../Redux/action/post";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CreatePost = ({ history }) => {
    // const myposts = useSelector((state) => state.postReducer.myposts);
    const [post, setPost] = useState({ title: "", body: "" });

    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");
    // const [image, setImage] = useState("");
    // const [url, setUrl] = useState("");
    const dispatch = useDispatch();
    // const handlePost = (e) => {
    //     e.preventDefault();
    //     dispatch(addpost(newPost, history));
    // };
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    // useEffect(() => {
    //     // addpost();
    //     // if (url) {
    //     //     fetch("/createPost", {
    //     //         method: "post",
    //     //         headers: {
    //     //             "Content-Type": "application/json",
    //     //             Authorization: "Bearer " + localStorage.getItem("jwt"),
    //     //         },
    //     //         body: JSON.stringify({
    //     //             title,
    //     //             body,
    //     //             pic: url,
    //     //         }),
    //     //     })
    //     //         .then((res) => res.json())
    //     //         .then((data) => {
    //     //             if (data.error) {
    //     //                 console.log("can't post");
    //     //             } else {
    //     //                 console.log("posted succ");
    //     //             }
    //     //         })
    //     //         .catch((err) => {
    //     //             console.log(err);
    //     //         });
    //     // }
    // }, []);

    // const postDetails = () => {
    //     const data = new FormData();
    //     data.append("file", image);
    //     data.append("upload_preset", "san3a-clone");
    //     data.append("cloud_name", "souhail");
    //     fetch("https://api.cloudinary.com/v1_1/souhail/image/upload", {
    //         method: "post",
    //         body: data,
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setUrl(data.url);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    return (
        <div
            className="card input-filed"
            style={{
                margin: "30px auto",
                maxWidth: "500px",
                padding: "20px",
                textAlign: "center",
            }}
        >
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={post.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="body"
                    placeholder="body"
                    value={post.body}
                    onChange={handleChange}
                />
                {/* <div className="file-field input-field">
                    <div className="btn">
                        <span>Upload image</span>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div> 
                     <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
                </div> */}
                <button
                    className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                    type="submit"
                    onClick={() => {
                        dispatch(addpost(post, history));
                        history.push("/profile");
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
