import { useFormik } from "formik";
import * as Yup from "yup";

export default function YupValidation(){
    const formik= useFormik({
        initialValues:{
            UserName:'',
            Email:'',
            Age:''
        },
        validationSchema:Yup.object({
           
                //if we dont define the msg then scema will give their msg because they have already defined it default schema have promises for every error they have given ine promise
                UserName:Yup.string()
                            .required('User Name Required')
                            .min(4,'Name to Short..')
                            .max(10,'Name to long.'),
                Email:Yup.string()
                         .required('Email Required')
                         .email('Invalid Email'),
                Age: Yup.number().required('Age Required')           
        }),
        onSubmit:values=>{
            alert(JSON.stringify(values))
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input {...formik.getFieldProps("UserName")} type="text"/></dd>
                    <dd className="text-danger">{formik.touched.UserName && formik.errors.UserName}</dd>
                    {/* we dont need to define errors they already defined */}
                     <dt>Email</dt>
                    <dd><input {...formik.getFieldProps("Email")} type="text"/></dd>
                     <dd className="text-danger"> {formik.touched.Email && formik.errors.Email}</dd>
                     <dt>Age</dt>
                    <dd><input {...formik.getFieldProps("Age")} type="text"/></dd>
                     <dd className="text-danger">{formik.touched.Age && formik.errors.Age}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}