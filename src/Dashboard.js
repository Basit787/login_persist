import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./reducers/LoginSlice";
import { Button } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello</h1>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
