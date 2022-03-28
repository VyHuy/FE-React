import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmpass] = useState("");
  async function signUp() {
    let item = { name, password, email, confirmPass };
    // console.log(item);
    fetch(`http://localhost:8000/api/register`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }).then((res) => res.json())
    .then((json) => {
      if (json.status == 200) {
        navigate("/login");
      } else {
        console.log("Error", json);
      }
    });
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center display-3 my-5">Register</h1>
          </div>
          <a href="/login">Login Now</a>
          <div className="col-md-6 mx-auto">
            <div className="form-group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control my-2"
                placeholder="Name"
              />
            </div>
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
              <input
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmpass(e.target.value)}
                className="form-control my-2"
                placeholder="Confirm pass"
              />
            </div>
            <div className="form-group">
              <button onClick={signUp} className="btn btn-block btn-dark">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
