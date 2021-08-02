import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "../pages/home";
import products from "../pages/products";
import cart from "../pages/cart";
import notFound from "../pages/notFound";
import Navbar from "../Components/Navbar";


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={home}></Route>
          <Route path="/products" component={products}></Route>
          <Route path="/cart" component={cart}></Route>
          <Route component={notFound}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
