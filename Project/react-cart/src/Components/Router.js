import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "../pages/home";
import about from "../pages/about";
import contact from "../pages/contact";
import notFound from "../pages/notFound";
import Navbar from "../Components/Navbar";


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={home}></Route>
          <Route path="/about" component={about}></Route>
          <Route path="/contact" component={contact}></Route>
          <Route component={notFound}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
