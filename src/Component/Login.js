import React, { useState,useEffect } from "react";
import "../Css/Login.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [userNames,setUserName]=useState("");
  const [{user},dispatch]=useStateValue();
  const [check,setCheck]=useState(true)


console.log(email)


  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error));
  };

const paramCheck = (e) =>{
  
  check ? setCheck(false):setCheck(true)


}





  return (
    <div className="login">
      <Link to="/" className="header_link">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
     


{check ?
<>
          <h5>E-mail</h5>
          <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          />
        
<button className="login_signInButton" onClick={paramCheck}>
           Continue
          </button>
          <p>
          By signing-in you agree to Amazon Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login_registerButton" onClick={signIn}>
          Continue
        </button>
    </>
: <form>
<button onClick={()=>setCheck(true)} className="lonin_backButton">Go Back </button>
<h5>Password</h5>
<h5>{email}</h5>

<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/> 
<button className="login_signInButton" onClick={paramCheck}>
           Sign In
          </button>
          <p>
          By signing-in you agree to Amazon Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login_registerButton" onClick={register}>
          Create your Amazon Account
        </button>

</form>
}


       
      </div>
    </div>
  );
}

export default Login;
