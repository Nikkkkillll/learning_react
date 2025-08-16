import { Formik, useFormik } from "formik"
 
export default function FormikDemo () {
    const formik=useFormik({//it the hook which provide some properties
        initialValues:{//it indicates what are the values to be handles by this form  
            UserName:'',
            Password:'',
            City:'',
            SubScribe:false
        },
        onSubmit:values=>{
            alert(`${values.UserName}\nSubcription: ${(values.SubScribe==true)?"Subscribed":"Not SubScribed"}`)
        }
    })
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password} type="password" /></dd>
                    <dt>City</dt>
                    <dd>

                        <select onChange={formik.handleChange} values={formik.values.City} name="City">
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                        
                    </dd>
                    <dt>Subscribe</dt>
                    <dd className="form-switch"><input className="form-check-input" name= "SubScribe" checked={formik.values.SubScribe} onChange={formik.handleChange} type="Checkbox"></input></dd>
                </dl>
                <button>Register</button>
            </form>
            
        </div>
    )
}