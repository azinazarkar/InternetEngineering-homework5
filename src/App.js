import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import MultilineTextFields from './items/Input'
import MaterialUIPickers from './items/DatePicker'
import MainPage from './forms/Main'
import Form from './forms/Form'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainMap from "./Map/MainMap";
import $ from "jquery";

function App() {
  return <Router>
          <Switch>
            <Route path ="/forms/:id">
              <Form />
            </Route>
            <Route exact path ="/">
              <MainPage/>
            </Route>
          </Switch>
        </Router>

  // return <MainPage/>
}


export default App;
