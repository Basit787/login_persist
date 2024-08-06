import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { entry } from "./LoginSlice";


const Login = () => {
  const [user, setUser] = useState({
    name: "",
    pass: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (user.name === "basit" && user.pass === "asdf") {
      dispatch(entry({ idToken: "Abdul-Basit" }));
    }
  };

  return (
    <div>
      <section className="container">
        <h1>Login Form</h1>

        <div className="card">
          <div>
            <form className="login">
              <label className="label">
                Username
                <input
                  type="text"
                  value={user.name}
                  name="name"
                  placeholder="enter username"
                  className="input"
                  required
                  onChange={handleChange}
                />
              </label>
              <label className="label">
                Password
                <input
                  type="password"
                  value={user.pass}
                  name="pass"
                  placeholder="enter your password"
                  className="input"
                  required
                  onChange={handleChange}
                />
              </label>
              <button className="btn" onClick={handleClick}>
                LogIn
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
