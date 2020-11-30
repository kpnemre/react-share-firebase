import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  // console.log(process.env);

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/login" component={Signup}  />
        <Route exact path="/signin" component={Signin}  />
        <Route path="/" component={Main}  />
      </Switch>
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
