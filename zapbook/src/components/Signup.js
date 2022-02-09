import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import '../navbar.css';

function Login() {
   const [credentials , setCredentials] = useState({email: "" , password: "" , name:""});
   let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(document.getElementById('password').value=== document.getElementById('confirmpassword').value){
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email ,password: credentials.password , name: credentials.name}),
            });
        const json = await response.json();
        console.log(json);
        history("/Alertsignup");
    }
    else{
        alert('Password should be same');
    }
    }
    const onChange =(e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
  return <>
      <div className="wrapper">
  <div id="formContent">
    {/* <!-- Tabs Titles --> */}
    <h2 className="active"> Sign Up </h2>
{/* 
    <!-- Icon --> */}
    <div className="first ">
    <i className="fas fa-user-circle text-8xl" id='icon'></i>
    </div>
    
    {/* <!-- Login Form --> */}
    <form onSubmit={handleSubmit}>
      <input type="text" id="name"   name="name" value={credentials.name}  placeholder="Name" onChange={onChange} required/>
      <input type="email" id="id"  name="email" value={credentials.email}  placeholder="Email" onChange={onChange} required/>
      <input type="password"  id="password"  value={credentials.password} name="password" placeholder="Password" onChange={onChange} minLength={5} required/>
      <input type="password"  id="confirmpassword"   name="confirm-password" placeholder="Re-enter Password" minLength={5} required/>
      <button type="submit" >SignUp</button>
    </form>
{/* 
    <!-- Remind Passowrd --> */}
    <div id="formFooter">
      Back to <Link to="/Login" className='text-sky-600 underlineHover'>Login</Link>
    </div>
  </div>
</div>

  </>;
}

export default Login;
