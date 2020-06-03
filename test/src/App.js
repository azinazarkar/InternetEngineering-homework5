import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import MultilineTextFields from './items/Input'
import MaterialUIPickers from './items/DatePicker'
import MainPage from './forms/Main'
import Form from './forms/Form'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/forms/:id">
          <Form />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
