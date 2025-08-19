import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

export default function FormikComponentValidation() {
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={
                {
                    UserName: '',
                    Email: '',
                    Age: '',
                    City: ''
                }

            } validationSchema={
                Yup.object({
                    UserName:Yup.string().min(4,'Name too short').max(10,'Name too long').required('Name Required'),
                    Email:Yup.string().email('Invalid Email ').required('Email Required'),
                    Age:Yup.number().required('Age Required'),
                    City: Yup.string()
                })
            } onSubmit={
                values=>{
                    alert(JSON.stringify(values))
                } 
            }>
            {
                feilds=>
                        <Form>
                    {
                        <div>
                            <dl>
                                <dt>UserName</dt>
                                <dd><Field name="UserName" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="UserName"></ErrorMessage></dd>
                                <dt>Email</dt>
                                <dd><Field name="Email" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Email"></ErrorMessage></dd>
                                <dt>Age</dt>
                                <dd><Field name="Age"  type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
                                <dt>City</dt>
                                <dd><Field name="City" as="select">
                                    <option>Hyd</option>
                                    <option>Delhi</option>
                                </Field></dd>

                            </dl>
                            <button disabled={(feilds.isValid)?false:true }>Register</button>
                        </div>
                    }
                </Form>
            }
            </Formik>

        </div>
    )
}