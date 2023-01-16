import React, { useState } from "react";
import "../../UI/FormStyle.css";
import { Link } from "react-router-dom";
import { Camera, Lock, User } from "react-feather";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

function SignIn(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useSignIn();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(username);
    // console.log(password);

    if (password.length === 0 || username.length === 0) {
      alert("All Feilds Are Mandatory");
      return;
    }

    const body = {
      username: `${username}`,
      password: `${password}`,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    // console.log(body);

    try {
      const response = await axios.post(
        "https://nulled1337.pythonanywhere.com/api/login/",
        body,
        {
          headers: headers,
        }
      );
      // console.log(response);
      signIn({
        token: response.data.token,
        expiresIn: 390,
        tokenType: "Bearer",
        authState: { user: username, token: response.data.token },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.response.data.non_field_errors[0]);
    }
  };

  return (
    <div className="auth__body">
      <form onSubmit={submitHandler}>
        <div className="auth__container">
          <h3>SIGN IN</h3>
          <div className="input__container">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={usernameHandler}
            ></input>
          </div>
          <div className="input__container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={passwordHandler}
            ></input>
          </div>

          <button>Sign In</button>
          <div className="auth__bottomContainer">
            <p>Forgot Password?</p>
            <p>
              New user?{" "}
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "#048ABF" }}
              >
                SIGN UP
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
