import { useState } from "react"

export default function FormComponent() {
    const [users] = useState([
        { UserId: 'john' },
        { UserId: 'john12' },
        { UserId: 'david' },
        { UserId: 'john_nit' }
    ]);
    const [userMsg, setUserMsg] = useState('');
    const [isUservalid, setUservalid] = useState(false);
    const [pwdMsg, setPwdMsg] = useState('');
    const [capsStatus, setCapsStatus] = useState(false);
    const [cityMsg,setCityMsg]=useState('');
    const [userDetails,setUserDetails ] =useState({UserId:'',Password:'',City:''});

    function verifyUserId(e) {
        for (var user of users) {
            if (user.UserId == e.target.value) {
                setUserMsg('User Id taken - Try Another')
                setUservalid(false)
                break;
            } else {
                setUserMsg('User Id Available');
                setUservalid(true)
            }
        }

    }
    function HideUserMsg(e) {
        if (e.target.value == '') {
            setUserMsg('User Id Required');
        } else {
            setUserMsg('')
            setCapsStatus(false)
        }


    }

    function VerifyPassword(e) {
        if (e.target.value.match(/(?=.*[A-Z]\w{4,10})/)) {
            setPwdMsg('Strong password ')
        } else {
            if (e.target.value.length < 4) {
                setPwdMsg('Poor Password')
            } else {
                setPwdMsg('Weak Password')
            }

        }
    }
    function HidePasswordMsg() {
        setPwdMsg('');
    }
    function VerifyCaps(e) {
        if (e.keyCode >= 65 && e.keyCode <= 90 || e.which >= 65 && e.which <= 90) {
            setCapsStatus(true);
        } else {
            setCapsStatus(false);
        }
    }
    function VerifyCity(e){
        if(e.target.value=="notcity"){
             setCityMsg('Please Select city ')
        }else{
            setCityMsg('');
        }
    }
    function HandleUserChange(e){
        setUserDetails({
            UserId:e.target.value,
            Password:userDetails.Password,
            City :userDetails.City

        })
    }
    function HandlePasswordChange(e){
        setUserDetails({
            UserId:userDetails.UserId,
            Password:e.target.value,
            City :userDetails.City

        })
    }
    function RegisterClick(){
        alert(JSON.stringify(userDetails))
    }
    return (
        <div className="container-fluid">
            <h2>Register user</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input onChange={HandleUserChange} type="text" onBlur={HideUserMsg} onKeyUp={verifyUserId} /></dd>
                <dd className={(isUservalid == true) ? 'text-success' : 'text-danger'}>{userMsg}</dd>
                <dt>Password</dt>
                <dd><input onChange={HandlePasswordChange} type="password" onKeyPress={VerifyCaps} onBlur={HidePasswordMsg} onKeyUp={VerifyPassword} /></dd>
                <dd>{pwdMsg}</dd>
                <dd className={(capsStatus == true ? 'd-block' : 'd-none ')}>
                    <span className="text-warning"><span className="bi bi-exclamation-triangle"></span>Caps On </span>

                </dd>
                <dt>Your City</dt>
                <dd>
                    <select onChange={VerifyCity}>
                        <option value="notcity">Select your city</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyd">Hyd</option>
                    </select>
                </dd>
                <dd className="text-danger">{cityMsg}</dd>


            </dl>
            <button onClick={RegisterClick }>Register</button>

        </div>
    )
}