import React from "react";

export default class TwoWayClassDemo extends React.Component{
    constructor(props){
          super(props)
          this.state={
            UserName:'John'
          } 
          this.handleUserChange=this.handleUserChange.bind     (this);
    }
    handleUserChange(e){
        this.setState({
            UserName:e.target.value
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>user Details</h2>
                <input  onChange={this.handleUserChange} type="text"/>
               <br/>
               <p>Hello !{this.state.UserName}</p>
            </div>
                

        )
    }
}