import React, { useState } from "react";
import svg1 from "./svg1/svg1.svg";
import SignIn from "./Signin";
import SignUp from "./signup";
import "./signup.css";

function Home() {
  const [form, setForm] = useState("SignIn");

  return (
    <>
      <div className="main">
        <div className="left-main">
          <div className="text">
            <h2>Sign in to</h2>
            <h3>Lorem, ipsum dolor sit</h3>
            <div>
              If you don't have an account register <br/>
              You can <n-></n->
              
              {form === 'SignIn' ? 
                  <button
                    style={{
                      textDecoration: 'none',
                      border: 'none',
                      background: 'white',
                      color: '#1976d2',
                      fontSize: '16px',
                      fontweight: 'bolder',
                    }}
                    onClick={() => setForm('SignUp')}
                  >
                    Register Here
                  </button>
                  : 
                  <button
                    style={{
                      textDecoration: 'none',
                      border: 'none',
                      background: 'white',
                      color: '#1976d2',
                      fontSize: '16px',
                      fontweight: 'bolder',
                    }}
                    onClick={() => setForm('SignIn')}
                  >
                    SignIn Here
                  </button>
                }
            </div>
          </div>
          <img src={svg1} className="left-img" alt="" />
        </div>
        {form === "SignIn" ? <SignIn /> : <SignUp />}
      </div>
    </>
  );
}

export default Home;

