import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import HomePage from "./pages/Home";

import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import PostDetailsPage from "./pages/PostDetails";
import CreatePostPage from "./pages/CreatePost";
import { ScrollToTop } from "./components/ReactScroll/Scroll";

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
            <CreatePostPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/posts/:id">
            <PostDetailsPage />
          </Route>
        </Switch>
      </Router>
      <ScrollToTop />
    </>
  );
}

export default App;
