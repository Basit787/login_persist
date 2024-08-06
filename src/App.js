import { useSelector } from "react-redux";
import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./login";

function App() {
  const user = useSelector((state) => state.Login.idToken);
  return <div>{user ? <Dashboard /> : <Login />}</div>;
}

export default App;
