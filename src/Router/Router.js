
import {useContext} from 'react'
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import UserPost from "../pages/UserPost";
import ForgotPassword from "../pages/ForgotPassword";
import Main from "../pages/Main";
import UserDetail from "../pages/UserDetail";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Copyright from '../components/Footer';
import { FirebaseAuthContext } from "../context/AuthContext";

function AppRouter() {
  // console.log(process.env);
const {currentUser} = useContext(FirebaseAuthContext);
  return (
    <Router>
      <Navbar />

      <Switch>
      <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/forgot-password" component={ForgotPassword} />

        <Route exact path="/user/:id" component={currentUser? UserDetail: Signin} />
        <Route exact path="/user/:id/post" component={currentUser? UserPost: Signin} />
        <Route path="/" component={Main} />
      </Switch>
<Copyright />
    </Router>
  );
}

export default AppRouter;


      // route
      // signin
      // signup
      // forgot password


