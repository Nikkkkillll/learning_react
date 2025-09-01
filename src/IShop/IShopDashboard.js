import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IShopDashboard() {
  const [cookies, setCookie, removeCookie] = useCookies(["userid"]);
  const [userid, setUserId] = useState();
  let navigate=useNavigate();
  useEffect(() => {
    
    if(cookies["userid"]==undefined){
        navigate("/login")
    }else{
        setUserId(cookies["userid"]);
    }
  }, [cookies]);

  function handleSignOut(){
    removeCookie("userid");
    navigate("/login")
  }
  return (
    <div>
      <h2>
        User Dashboard {userid} -
        <button
        onClick={handleSignOut}
          className="btn btn-link"
        //   onClick={() => removeCookie("userid", { path: "/login" })}
    
        >
          SignOut
        </button>
      </h2>
    </div>
  );
}
