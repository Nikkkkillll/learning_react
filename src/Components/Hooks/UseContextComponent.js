import React from "react";
import { useState,useContext  } from "react";

var  userDetailsContext=React.createContext(null);

export default function UseContextComponent(){
    
    const[userDetails,setUserDetails]=useState({
        UserName:'',
        Email:''
    })
    function handleUser(e){
        setUserDetails({
            UserName:e.target.value,
            Email:userDetails.Email
        })
    }
    function handleEmail(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Email:e.target.value
        })
    }
    function handleSet(){
        setUserDetails({
            UserName:userDetails.UserName,
            Email:userDetails.Email
        })
    }
    return(
        <div className="container-fluid">
            <userDetailsContext.Provider value={userDetails}>
                <h2>Site Index-{userDetails.UserName }</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={handleUser} type="text"/></dd>
                    <dt>Email</dt>
                    <dd><input onChange={handleEmail} type="email"/></dd>
                </dl> 
                <button onClick={handleSet}>Set Data</button>
            <HeaderComponent/>
            </userDetailsContext.Provider>
            
            

        </div>
    )
}

function HeaderComponent(){
    const userdetails=useContext(userDetailsContext);
    return(
        <div className="bg-info text-white" style={{height:'150px',padding:'10px'}}>
            <h2>Home- {userdetails.UserName}</h2>
            <NavbarComponent/>

        </div>
    )
}
function NavbarComponent(){
    const userdetails=useContext(userDetailsContext);
    return(
        <div className="btn-toolbar bg-dark text-white justify-content-between  ">
            <div className="btn-group">
                <button className="btn btn-dark">Amazon</button>
            </div>
            <div className="btn-group">
                <button className="btn btn-dark">{userdetails.Email}</button>
            </div>
           
        </div>
    )
}