import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { entry } from "./reducers/LoginSlice";
import { Button, Card, TextField } from "@mui/material";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    pass: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
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
        <Card className="card">
          <h1>Login Form</h1>
          <div>
            <form className="login">
              <TextField
                type="text"
                value={user.name}
                name="name"
                label="Name"
                placeholder="enter username"
                onChange={handleChange}
              />

              <TextField
                type="password"
                value={user.pass}
                name="pass"
                label="Password"
                placeholder="enter your password"
                onChange={handleChange}
              />

              <Button variant="contained" onClick={handleClick}>
                LogIn
              </Button>
            </form>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Login;
