import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/footer/Footer.jsx"
import Home from "./pages/home/Home.jsx"
import Input from "./pages/input/Input.jsx"
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import SelectYoutuber from "./pages/selectYoutuber/SelectYoutuber.jsx";


const AppRouter = ({ isLoggedIn, userObj}) => {
  return (
    <Router>
        <Switch>
            <Route exact path="/"><Home isLoggedIn={isLoggedIn} /></Route>
            <Route exact path="/login"><Login  /></Route>
            <Route exact path="/register"><Register  /></Route>
            <Route exact path="/selectYoutuber"><SelectYoutuber isLoggedIn={isLoggedIn} /></Route>
            <Route exact path="/selectYoutuber/:youtuber"><Input isLoggedIn={isLoggedIn} /></Route>
        </Switch>
        <Footer/>
    </Router>
  );
};
export default AppRouter;