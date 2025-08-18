import { useFormik} from "formik";

export default function FormikValidation(){

    function VerifyUserDetails(userDetails){
        const errors={};
        if(userDetails.UserName===""){
            errors.UserName="User Name Required";
        }else if(userDetails.UserName.length<4){
            errors.UserName="Name too short..";
        }else if(userDetails.UserName.length>10){
            errors.UserName="Name too long..";
        }

        if(userDetails.Age===""){
            errors.Age="Age Required";
        }else if(isNaN(userDetails.Age)){
            errors.Age="Age must be number";
        }

        if(userDetails.Email===""){
            errors.Email="Email Required";
        }else if(userDetails.Email.indexOf("@")<=2){
            errors.Email="Invalid Email"; 
        }
        
        if(userDetails.Mobile==""){
            errors.Mobile="Mobile Required";
        }else if(userDetails.Mobile.match(/\+91\d{10}/)){
            errors.Mobile=""; 
        }else{
            errors.Mobile="Invalid Mobile";
        }
         
          return errors;
    }
    const formik=useFormik({
            initialValues:{
                UserName:'',
                Age:'',
                Email:'',
                Mobile:''
            },
            validate:VerifyUserDetails,
            onSubmit:values=>{
                alert(JSON.stringify(values));
            }
        })
    return(
        <div className="container-fluid">
            
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={formik.handleChange} name="UserName" type="text"/></dd>
                    <dd className="text-danger">{formik.touched.UserName && formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input onChange={formik.handleChange} name="Age"  type="text"/></dd>
                    <dd className="text-danger"> {formik.touched.Age && formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input onChange={formik.handleChange} name="Email"   type="text"/></dd>
                    <dd className="text-danger">{formik.touched.Email && formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange}></input></dd>
                    <dd className="text-danger">{formik.touched.Mobile && formik.errors.Mobile}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}