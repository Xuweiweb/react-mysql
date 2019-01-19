import React, { Component } from 'react';
import {connect} from "react-redux"
class App extends Component {
  render() {
    return (
      <div className="wrap">
     content
      </div>
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
