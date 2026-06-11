import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
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
      const res = await axios.post("http://localhost:3002/signup", user);

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center">
          <img
            src="media/images/signup.png"
            alt="signup"
            className="img-fluid"
            style={{ maxWidth: "450px" }}
          />
        </div>

        <div className="col-lg-6">
          <h2 className="mb-4">Open a free demat and trading account</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>

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
                type="text"
                name="mobile"
                className="form-control"
                placeholder="Mobile Number"
                value={user.mobile}
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

            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
          </form>

          <p className="mt-3 text-muted">
            By proceeding, you agree to the Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
