import { useState,useEffect } from "react";

export default function UseStateEffect(){
    const[msg,setMsg]=useState();

    function handleSuccessClick(){
        setMsg(<SuccessComponent/>)
    }
    function handleErrorClick(){
        setMsg(<ErrorComponent/>)
    }

    return(
        <div className="container-fluid">
            <button onClick={handleSuccessClick }>Success</button>
            <button onClick={handleErrorClick}>Invalid</button>
            <hr/>
            <div>
                {msg}
            </div>

        </div>
    )
}

function SuccessComponent(){
    useEffect(()=>{
        alert('Success Component Will Mount');
        return(()=>{
            alert('Success Component Will UnMount');
        })
    },[])
    return(
        <div>
            <h2>Login Success....</h2>
        </div>
    )
}

function ErrorComponent(){
    useEffect(()=>{
        alert('Error Component Will Mount');
        return(()=>{
            alert('Error Component Will UnMount');
        })
    },[])
    return(
        <div>
            <h2>Invalid Credentials....</h2>
        </div>
    )
}