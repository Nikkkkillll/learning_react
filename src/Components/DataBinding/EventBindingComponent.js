import { useState, useEffect } from "react";

export default function EventNindingComponent(){
    const [userName,setUserName]=useState('John');

    function handleruserName(e){
        setUserName(e.target.value)

    }
    return(
        <div className="container-fluid">
              <dl>
                <dt>user Name</dt>
                <dd><input type="text" value={userName} onChange={handleruserName}/></dd>
              </dl>
              <h3>Hello ! {userName}</h3>
        </div>
    )
}