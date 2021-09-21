import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link,NavLink } from "react-router-dom";
import { logout } from "../../Redux/action/user";
import "./navbar.css";
const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return (
        <header>
            <h2>
                <i className="logo" style={{ color: "white" }} />
                <Link to="/">San3a</Link>
            </h2>
            <nav>
                <ul>
                    {isAuth ? (
                        <ul>
                            <Link to="/profile">
                                <li className="auth" style={{ color: "white" }}>
                                    Profile
                                </li>
                            </Link>
                            <Link to="/">
                                <li
                                    className="auth"
                                    style={{ color: "white" }}
                                    onClick={() => dispatch(logout())}
                                >
                                    LOGOUT
                                </li>
                            </Link>
                        </ul>
                    ) : (
                        <ul>
                            <Link to="/profile">
                                <li className="auth" style={{ color: "white" }}>
                                    Profile
                                </li>
                            </Link>
                            <Link to="/register">
                                <li className="auth" style={{ color: "white" }}>
                                    Register
                                </li>
                            </Link>

                            <Link to="/login">
                                <li className="auth" style={{ color: "white" }}>
                                    LogIn
                                </li>
                            </Link>
                             <NavLink
                            to="/admin"
                            exact
                            activeClassName="active-left-nav"
                        >
                            <img src="./img/icons/admin.png" alt="home" />
                        </NavLink>
                        </ul>

                       
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
