import "./Login.css"
import { auth } from "../firebase/firebase_app";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState} from "react";
import { useNavigate } from "react-router";
export default function Login({loggedin_state}) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigate=useNavigate();
  const google=new GoogleAuthProvider();
  const submit_form=(e)=>{
    e.preventDefault();
    if (password.length<8) {
      console.log("weak password");
    }else{
      signInWithEmailAndPassword(auth,username,password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        loggedin_state(true);
        navigate("/");
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      setusername('');
      setpassword('');
    }
  }

  const google_submit=()=>{
    signInWithPopup(auth,google).then((user)=>{
      loggedin_state(true);
      navigate("/");
    }).catch((err)=>{
      console.log(err)
    })
  }

  return <div className="Login-container">
    <div className="Login-main">
    <h1>Login</h1>
    <form className="Login-form" onSubmit={submit_form}>
    <label className="form-label" >Username</label>
    <input id="login-username"   className="login-username" type="email" value={username} onChange={(e)=>{setusername(e.target.value)}} required/><br/>
    <label className="form-label">Password</label>
    <input id="login-username"  className="login-username" value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password"  required/><br/>
    <button className="login-submit" >Submit</button>
    </form>
    <div>
    <div className="dash"/>
    <p>or continue with google</p>
    <button className="login-google" onClick={google_submit}>Google</button>
    </div>
    </div>
    </div>
}
