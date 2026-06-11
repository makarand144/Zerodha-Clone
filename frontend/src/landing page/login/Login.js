import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/login",
        user
      );

      alert(res.data.message);

      localStorage.setItem("isLoggedIn", "true");

      window.location.href = "http://localhost:3001";

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">

        <div className="col-lg-6 text-center">
          <img
            src="media/images/signup.png"
            alt="login"
            className="img-fluid"
            style={{ maxWidth: "450px" }}
          />
        </div>

        <div className="col-lg-6">

          <h2 className="mb-4">
            Login to your account
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
