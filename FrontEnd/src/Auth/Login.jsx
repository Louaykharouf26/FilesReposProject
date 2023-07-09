import logo from './login.png'
import './Auth.css';
import { useRef ,useState } from 'react';
import {  useLocation ,useNavigate } from "react-router-dom";
function Login()
{ const emailRef = useRef();
    const passwordRef = useRef();
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    function log(e)
    { e.preventDefault();
       
      const requestOptions = {
            method: "POST",
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: emailRef.current.value,
              password: passwordRef.current.value,
              
            }),
          };
          fetch("http://localhost:4000/login",requestOptions)
          .then((response)=>response.json())
          .then((data)=>{console.log(data);setToken(data.token);
            
            setUserData(data);
            console.log(userData);
            navigate("/");
          localStorage.setItem("id",data.id); 
          localStorage.setItem("email",data.email); 
          localStorage.setItem("subscription_id",data.subscription_id);
         // localStorage.setItem("email",data.email);
          
        })
          
    }
    
return(
    <>
     <div className="SignIn" id="intro">
    <p className="sign">Sign in to  <br/> 
<span className="account">Your Account</span>
</p>
<p className="signdesc">Create an account and discover the potential of the services you use. Your account gives you more options by personalizing your experience and giving you easy access to your most important information.</p>

<div className="container" id="signinbx">

<p className="welcome">Welcome to <span className="Test">FilesRepo</span></p> 
<p className="Sin">Sign in</p>
<p className="NA">No Account ?</p>
<a href="/SignUp" className="signUp" >Sign up</a>
<label htmlFor="staticEmail" className="form-label" id="label1" >Email</label>
<input type="email" className="form-control" id="staticEmail" aria-describedby="emailHelp" required placeholder='Enter Your Email' ref={emailRef}></input>
<label htmlFor="inputPassword" className="form-label" id="label2">Password</label>
<input type="password" className="form-control" id="inputPassword"  required placeholder='Enter Password'ref={passwordRef} ></input>


<button  onClick={log}  type="submit" className="btn btn-primary log" id="signbtn">Login</button>
</div>

     

</div>
<img src={logo} className='logo-img1'></img>
    </>)
}
export default Login;