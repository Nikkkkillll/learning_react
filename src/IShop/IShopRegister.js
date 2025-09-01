// import {useNavigate} from "react-router-dom"
// import { useFormik } from "formik";
// import axios from "axios";
// export default function IShopRegister(){
//     // let navigate=useNavigate();
//     // function HandleButtonClick(){
//     //     navigate("/login");
//     // }

//     return(
//         <div>
//             <h2>Register New User</h2>
//             {/* <button onClick={HandleButtonClick}>Go to Login</button> */}
//         </div>
//     )
// }
import { useState, useEffect, Link } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export default function IShopRegister() {
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState('');
    const formik = useFormik({
        initialValues: {
            userId: '',
            UserName: '',
            Password: '',
            Age: 0,
            Mobile: '',
            Subscribed: false,
        },
        onSubmit: values => {
            axios.post("http://127.0.0.1:4000/registeruser", values);
            alert("Registered Successfully");
            navigate("/login");


        }

    })
    return (
        <div className="container-fluid">
            <h2>User Details</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" value={formik.values.userId} onChange={formik.handleChange} name="userId" /></dd>

                    <dt>User Name</dt>
                    <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" value={formik.values.Password} onChange={formik.handleChange} name="Password" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" value={formik.values.Age} onChange={formik.handleChange} name="Age" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile" /></dd>
                    <dt>Subscribed</dt>
                    <dd className="form-switch"><input className="form-check-input" type="checkbox" checked={formik.values.Subscribed} onChange={formik.handleChange} name="Subscribed" /></dd>

                </dl>
                <button className="btn btn-primary">Register</button>
                <br />
                <Link to="/login">Already have account?</Link>

            </form>
        </div>
    );
}
