import "./App.css";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Home from "../components/home/Home";
import Login from "./login";
import SignUp from "./signUp";
import { Route, Redirect, Switch } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
         
function App(props) {
  return (
    <>     
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
}

export default App;