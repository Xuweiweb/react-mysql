import React, { Component } from 'react';
import "../common/css/app.css"
import {connect} from "react-redux";
import RouterView from './../router/routerView.jsx';
import {BrowserRouter as Router,NavLink} from "react-router-dom"
class App extends Component {
  render() {
    return (
      <Router>
      <div className="wrap">
      <NavLink to="/order">ORDER</NavLink>
      <NavLink to="/shop">SHOP</NavLink>
        <RouterView/>
      </div>
      </Router>
    );
  }
}
let stateToProps=(state)=>{
  return state
}
let dispatchToProps=(dispatch)=>{
  return {
    update(val){
      return dispatch({
        type:"UPDATE",
        payload:val
      })
    }
  }
}
export default connect(stateToProps,dispatchToProps)(App);
