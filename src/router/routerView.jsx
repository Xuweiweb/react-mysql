import React from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import Routes from "./routes";

class RouterView extends React.Component{
    constructor(props){
        super()
    }
    render(){
        let {routes}=this.props;
        routes=routes===undefined?Routes:routes;
        let defaultRouter=<Route path="/" component={()=>{
            return <Redirect to="/order"/>
        }}  exact key={1}/>


        return <Switch>
                    {
                        routes.map((ele,index)=>{
                            let Com=ele.component;
                            return <Route path={ele.path} component={(apiRouter)=>{
                                    return <Com routes={ele.children} {...apiRouter}/>
                            }} key={index}></Route>
                        }).concat(defaultRouter)
                    } 
                     
        </Switch> 
                
      
    }
}

export default RouterView;