
import { Link,Outlet } from "react-router-dom"
export default function NriHome(){
    return(
        <div>
            <h2>Nri Home</h2>
            <ul>
                <li><Link to="nrilogin">Login</Link></li>
                <li><Link to="nriregister">Register</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
        
    )
}