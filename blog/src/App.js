import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useContext } from "react";
import {Context} from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar/>
      <Routes>
      <Route path="/" exact element={<Home/>}></Route> 
      <Route path="/about" exact element={<About/>}></Route> 
      <Route path="/register" exact element={user? <Home/>:<Register/>}></Route>
      <Route path="/login" exact element={user ? <Home/> : <Login />}></Route> 
      <Route path="/write" exact element={user ? <Write /> : <Register />}></Route>
      <Route path="/settings" exact element={user ? <Settings /> : <Register/>}></Route>
      <Route path="/post/:postId" exact element={<Single/>}></Route>
      </Routes>
      </Router>
  );
}

export default App;
