import { useState,useEffect } from "react"
import { useCookies   } from "react-cookie"
import { useCaptcha } from "../Custom Hook/useCaptcha";
export default function UseCookie(){
    const [cookies,setCookie,removeCookie]=useCookies(['username']);
    const [userDetails,setUserDetails]=useState
    ({UserName:'',Password:''});
    const[code]=useCaptcha();

    function handleUserName(e){
        setUserDetails({
            UserName:e.target.value,
            Password:userDetails.Password
        })

    }
    function handlePassword(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Password:e.target.value
        })

    }
    function handleLogin(e){
        setCookie("username",userDetails.UserName,{path:"/",expires: new Date("2025-08-24 20:22")});
        alert("Login Success..");

    }
    function handleSignOut(){
        removeCookie("username");
        alert("Signed out Success fully..");
    }
    useEffect(()=>{
        if(cookies.username==undefined){
            alert("Please Login")
        }
    },[])

    return(
        <div className="container-fluid"> 
        <h2>User Login</h2>
        <dl>
            <dt>User Name</dt>
            <dd><input onChange={handleUserName} type="text"/></dd>
            <dt>Password</dt>
            <dd><input onChange={handlePassword} type="password"/></dd>
            <dt>Verify Code</dt>
            <dd>{code.code}</dd>
        </dl>
        <button onClick={handleLogin}>Login</button>
        <div>
            <h3>Home <button onClick={handleSignOut} className="btn btn-link">Sign Out</button></h3>
        <hr/>
        Hello ! {cookies.username}

        </div>
        </div>
        
    )
}
////