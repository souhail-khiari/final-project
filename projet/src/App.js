import "./App.css";
import errors from "./Pages/errors/errors";
import Register from "./Pages/Register/Register";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./router/PrivateRoute";
import { current } from "./Redux/action/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditProfile from "./Pages/Profile/editProfile";
import Profile from "./Pages/Profile/profile";
import Landpages from "./Pages/landpage/landpages";
import Login from "./Pages/Login/login";
import ProfileList from "./Pages/Profile/profileList";
import createPost from "./Pages/Post/createPost";
import PostList from "./Pages/Post/PostList";
import Dashboard from "./Components/Admin/dashboard" ;
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Landpages} />

                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/profile" component={Profile} />
                {/* <Route path="/profile" component={Profile} /> */}
                {/* <Route path="/profile/:id" component={Profile} /> */}
                <Route path="/profileList" component={ProfileList} />
                <Route path="/editProfile" component={EditProfile} />
                <Route path="/createPost" component={createPost} />
                <Route path="/admin" component={Dashboard} />
                <Route path="/*" component={errors} />
                <Route path="/postList" component={PostList} />
            </Switch>
        </div>
    );
}

export default App;
