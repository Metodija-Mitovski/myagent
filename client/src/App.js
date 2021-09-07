import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import HomePage from "./pages/Home";

import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import { ScrollToTop } from "./components/ReactScroll/Scroll";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/post/create">
            <CreatePost />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
      <ScrollToTop />
    </>
  );
}

export default App;
