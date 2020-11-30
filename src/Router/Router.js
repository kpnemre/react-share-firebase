import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Main from "../pages/Main";
import UserDetail from "../pages/UserDetail";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Copyright from '../components/Footer'
function AppRouter() {
  // console.log(process.env);

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/login" component={Signup}  />
        <Route exact path="/signin" component={Signin}  />
        <Route exact path="/user/:id" component={UserDetail}  />
        <Route path="/" component={Main}  />
      </Switch>
<Copyright />
    </Router>
  );
}

export default AppRouter;

{
  /* 
      // route
      // signin
      // signup
      // forgot password
      */
}
