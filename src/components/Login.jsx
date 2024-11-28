import "./Login.css"
export default function Login() {
 return <div className="Login-container">
  <div className="Login-main">
    <h1>Login</h1>
    <form className="Login-form">
    <label className="form-label" >Username</label>
    <input id="login-username"  className="login-username" type="email" required/><br/>
    <label className="form-label">Password</label>
    <input id="login-username"  className="login-username" type="email" required/><br/>
    <button className="login-submit">Submit</button>
    </form>
    <div>
    <div className="dash"/>
    <p>or continue with google</p>
    <button className="login-google">Google</button>
    </div>
    </div>
    </div>
}
