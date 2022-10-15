import "./App.css";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./components/Topbar/TopBar";
// import Post from "./components/post/Post";
// import Posts from "./components/posts/Post";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import Single from "./components/singlepost/SinglePost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let data = sessionStorage.getItem("userdata");
  data = JSON.parse(data);

  let currentUser;
  if (data) {
    currentUser = true;
  } else {
    currentUser = false;
  }
  // const currentUser = false;
  return (
    <>
      <div className="App">
        <Router>
          <TopBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/posts">
              <Home />
            </Route>
            <Route path="/register">
              {currentUser ? <Home /> : <Register />}
            </Route>
            <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
            <Route path="/post/:id">
              <Single />
            </Route>
            <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
            <Route path="/settings">
              {currentUser ? <Settings /> : <Login />}
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
