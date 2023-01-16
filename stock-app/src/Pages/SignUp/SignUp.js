import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../UI/FormStyle.css";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const newPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(username);
    // console.log(password);

    if (
      newPassword.length === 0 ||
      email.length === 0 ||
      username.length === 0 ||
      confirmPassword.length === 0
    ) {
      alert("All Feilds Are Mandatory");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    const body = {
      username: `${username}`,
      email: `${email}`,
      password: `${confirmPassword}`,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    // console.log(body);

    try {
      const response = await axios.post(
        "https://nulled1337.pythonanywhere.com/api/register/",
        body,
        {
          headers: headers,
        }
      );
      console.log(response);
      navigate("/signin");
      alert("user has been created!");
    } catch (err) {
      console.log(err.response.data);
      if (err.response.data.email[0] !== undefined) {
        alert(err.response.data.email[0]);
      }

      if (err.response.data.username[0] !== undefined) {
        alert(err.response.data.username[0]);
      }
    }
  };
  return (
    <div className="auth__body">
      <form onSubmit={submitHandler}>
        <div className="auth__container">
          <h3>SIGN UP</h3>
          <input
            type="text"
            name="Username"
            placeholder="Ussername"
            onChange={usernameHandler}
          ></input>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            onChange={emailHandler}
          ></input>
          <input
            type="password"
            name="Newpassword"
            placeholder="New Password"
            onChange={newPasswordHandler}
          ></input>
          <input
            type="password"
            name="Confirmpassword"
            placeholder="Confirm Password"
            onChange={confirmPasswordHandler}
          ></input>
          <button>Sign Up</button>
          <div className="auth__bottomContainer">
            <p>
              Existing User?{" "}
              <Link
                to="/signin"
                style={{ textDecoration: "none", color: "#048ABF" }}
              >
                SIGN IN
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
