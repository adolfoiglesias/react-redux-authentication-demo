import React from 'react';
import logo from './logo.svg';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import { history } from './utils';

import './App.css';
import { PrivateRoute } from "./components";
import { HomePage, LoginPage} from "./views";



function App() {
  return (
    <div className="jumbotron">
        <div className="container">
            <div className="col-sm-8 col-sm-offset-2">
              
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                    </div>
                </Router>
            </div>
        </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(App);
