import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Header from "../../Components/Header/header";
// import Sidebar from "../../Components/Sidebar/sidebar";
import { getPosts } from "../../Redux/action/post";
import { getUser } from "../../Redux/action/user";
// import PostCard from "../Post/PostCard";
import ProfileList from "../Profile/profileList";
import "./landpage.css";

const Landpages = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer.posts);
    const users = useSelector((state) => state.userReducer.users);
    // console.log(posts);
    // const [nameSearch, setNameSearch] = useState("");

    // const getJobSearch = "taxiste";
    const [jobSearch, setJobSearch] = useState("");

    // const getNameSearch = (inputName) => {
    //     setNameSearch(inputName);
    // };
    const getJobSearch = (input) => {
        setJobSearch(input);
    };
    useEffect(() => {
        dispatch(getUser());
        dispatch(getPosts());
    }, []);
    return (
        <div>
            <div
                id="carouselBasicExample"
                className="carousel slide carousel-fade"
                data-mdb-ride="carousel"
            >
                <div className="carousel-inner">
                    {users.map((el) => (
                        <div className="carousel-item active">
                            <img
                                src="https://www.lawej.kcs.tn/img/worker2.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{el.name}</h5>
                                <p>{el.job}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <hr /> */}
            <div className="row mb-5">
                <div className="col-lg-8 mx-auto">
                    <div className="bg-white p-5 rounded shadow">
                        <form action="" className="flex-f">
                            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                <div className="input-group">
                                    <input
                                        type="search"
                                        placeholder="What're you searching for?"
                                        // aria-describedby="button-addon1"
                                        className="form-control border-0 bg-light"
                                        onChange={(e) => {
                                            getJobSearch(e.target.value);
                                        }}
                                    />
                                    <div className="input-group-append">
                                        {/* <Link to="/profileList"> */}
                                        <button
                                            id="button-addon1"
                                            type="submit"
                                            className="btn btn-link text-primary"
                                        >
                                            <i className="fa fa-search"></i>
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div style={{ margin: "15px", display: "block" }}>
                <div className="card">
                    <div className="card-body">
                        <span style={{ color: "black" }}>
                            Embauchez des professionnels vérifiés et évalués
                        </span>

                        <div className="mb-2 text-muted card-subtitle h6">
                            Avec des avis, des évaluations et une vérification,
                            San3a vous donne les outils dont vous avez besoin
                            pour embaucher en toute confiance.
                        </div>
                        <img
                            className="card-img-bottom"
                            src="https://www.lawej.kcs.tn/img/pic_workers.jpg"
                            alt="Card img"
                        />
                    </div>
                </div>
            </div>
            <hr />
            {/* <main>
                <div className="container">
                    <div className="row">
                        <div className="postlist">
                            <section
                                className="postlist"
                                // style={"top: 80px;"}
                            >
                                <PostCard />
                            </section>
                        </div>
                    </div>
                </div>
            </main> */}

            <div className="postlist">
                {posts.map((el) => (
                    <section className="border-bottom mb-4 pb-4">
                        <div className="row">
                            <div className="col-3">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                                    className="img-fluid shadow-1-strong rounded-5"
                                    alt=""
                                />
                            </div>

                            <div className="col-9">
                                <p className="mb-2">
                                    <strong>{el.createdAt}</strong>
                                </p>
                                <p className="mb-2">
                                    <strong>{el.postedBy.name}</strong>
                                </p>
                                <a href="" className="text-dark">
                                    <i className="fab fa-facebook-f me-1"></i>
                                </a>
                                <a href="" className="text-dark">
                                    <i className="fab fa-twitter me-1"></i>
                                </a>
                                <a href="" className="text-dark">
                                    <i className="fab fa-linkedin me-1"></i>
                                </a>
                                <p>{el.title}</p>
                                <p>{el.body}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            <main style={{ backgroundColor: "white" }}>
                <div className="container">
                    <div className="row">
                        <div className="profilelist">
                            <section
                                className="profilelist"
                                style={{ top: " 80px" }}
                            >
                                <ProfileList
                                    jobSearch={jobSearch}
                                    // nameSearch={nameSearch}
                                />
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-light text-lg-start">
                <div className="text-center py-4 align-items-center">
                    <p>Follow San3a on social media</p>
                    <a
                        href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                        className="btn btn-primary m-1"
                        role="button"
                        rel="nofollow"
                        target="_blank"
                    >
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/mdbootstrap"
                        className="btn btn-primary m-1"
                        role="button"
                        rel="nofollow"
                        target="_blank"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://twitter.com/MDBootstrap"
                        className="btn btn-primary m-1"
                        role="button"
                        rel="nofollow"
                        target="_blank"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/mdbootstrap/mdb-ui-kit"
                        className="btn btn-primary m-1"
                        role="button"
                        rel="nofollow"
                        target="_blank"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>

                <div
                    className="text-center p-3"
                    // style="background-color: rgba(0, 0, 0, 0.2);"
                >
                    © 2021 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">
                        San3a.com
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Landpages;
