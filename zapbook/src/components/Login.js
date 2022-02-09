import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import '../navbar.css';

function Login() {
   const [credentials , setCredentials] = useState({email: "" , password: ""});
   let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email ,password: credentials.password}),
            });
        const json = await response.json();
        console.log(json);
        if(json.success){
         //redirect and save auth token
         sessionStorage.setItem('Token' , json.authToken);
         sessionStorage.setItem('name' , json.name);
         history("/viewpage");
        }
        else{
            alert('invalid credentianls');
        }
    }
    const onChange =(e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
  return <>
      <div className="wrapper my-10">
  <div id="formContent">
    {/* <!-- Tabs Titles --> */}
    <h2 className="active"> Sign In </h2>
{/* 
    <!-- Icon --> */}
    <div className="fadeIn first">
    <i className="fas fa-user-circle text-8xl" id='icon'></i>
    </div>
    
    {/* <!-- Login Form --> */}
    <form onSubmit={handleSubmit}>
      <input type="text" id="id"  name="email" value={credentials.email}  placeholder="UserName" onChange={onChange}/>
      <input type="password" id="password"  value={credentials.password} name="password" placeholder="password" onChange={onChange}/>
      <button type="submit" >Log In</button>
    </form>
{/* 
    <!-- Remind Passowrd --> */}
    <div id="formFooter">
      <Link to="" className="underlineHover">Forgot Password? </Link> or SignUp <Link to="/Signup" className='text-sky-600 underlineHover'>here</Link>
    </div>

  </div>
</div>

  </>;
}

export default Login;
