import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function signIn() {
    let item = { password, email };
    // console.log(item);
    let result = await fetch(`http://localhost:8000/api/login`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded; charset=UTF-8;application/json",
        Accept: "application/json",
      },
    })
      .then((response) => console.log(JSON.stringify(response)))
      .catch((error) => console.error("Error:", error));
    // result = await result.json();
    navigate("/");
    // console.log("result", result);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center display-3 my-5">Login</h1>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control my-2"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control my-2"
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <button onClick={signIn} className="btn btn-block btn-dark">
                Login
              </button>
            </div>
            <a href="/register">Or Register Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
