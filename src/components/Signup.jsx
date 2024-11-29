import "./Login.css"
import { auth } from "../firebase/firebase_app";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState} from "react";
export default function Signup() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const google=new GoogleAuthProvider();
  const submit_form=(e)=>{
    e.preventDefault();
    if (password.length<8) {
     console.log("weak password");
    }else{
      createUserWithEmailAndPassword(auth,username,password).then((user)=>{
        console.log(user.user)
      }).catch((e)=>console.log(e.code));
      setusername('');
      setpassword('');
    }
  }

  const google_submit=()=>{
      signInWithPopup(auth,google).then((user)=>{
        console.log(user)
      }).catch((err)=>{
        console.log(err)
      })
  }

 return <div className="Login-container">
  <div className="Login-main">
    <h1>Signup</h1>
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