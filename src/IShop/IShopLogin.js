import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { useState, useEffect } from "react"
import axios from "axios";
import { useCookies } from "react-cookie";

export default function IShopLogin() {
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies();
    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: ''
        },
        onSubmit: values => {
            for (let user of users) {
                const id = user.UserId || user.userId;  // handle both cases

                if (
                    id && id.toLowerCase() === values.UserId.toLowerCase() &&
                    user.Password === values.Password
                ) {
                    setCookie("userid", id, { path: "/" });  // ✅ use id, not user.UserId
                    navigate("/dashboard");
                    return;
                }
            }
            navigate("/errorpage");
        }

    })
    useEffect(() => {
        axios.get("http://127.0.0.1:4000/getusers")
            .then(res => {
                setUsers(res.data);
            })
    }, []);
    return (
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input
                        name="UserId"
                        value={formik.values.UserId}
                        onChange={formik.handleChange}
                        type="text"
                    />
                    </dd>
                    <dt>Password</dt>
                    <dd><input
                        name="Password"
                        value={formik.values.Password}
                        onChange={formik.handleChange}
                        type="password"
                    /></dd>
                    <button className="btn btn-primary">Login</button>
                </dl>
                <br />
                <Link to="/register">New User?</Link>
            </form>
        </div>
    )
}