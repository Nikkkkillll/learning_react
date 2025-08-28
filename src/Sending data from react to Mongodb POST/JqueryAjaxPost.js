import { useState, useEffect } from "react";
import $ from 'jquery';
import { useFormik } from "formik";
export default function JqueryAjaxPost() {
    const [users, setUsers] = useState([]);
    const [userError,setUserError]=useState('');
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
            $.ajax({
                method: "POST",
                url: "http://127.0.0.1:4000/registeruser",
                data: values
            })
            alert("Registered Successfully")

        }
    })

    useEffect(() => {
        $.ajax({
            method: "GET",
            url: "http://127.0.0.1:4000/getusers",
            success: function (response) {
                setUsers(response);
            },
            error: function (err) {
                console.error("Fetch error:", err);
            }
        })
    }, []);

    function VerifyUserId(e){
        for(var user of users){
            if(user.userId==e.target.value){
                setUserError('User ID Taken -Try Another');
                break;
            }else{
                setUserError('User Id Available')
            }
        }
    }

    return (
        <div className="container-fluid">
            <h2>User Details</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onKeyUp={VerifyUserId} value={formik.values.userId} onChange={formik.handleChange} name="userId" /></dd>
                    <dd>{userError}</dd>
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

            </form>
        </div>
    );
}
