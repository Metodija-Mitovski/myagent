import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authenticationRequest } from "./state/action-creators/user-actions";
import ProtectedRoute from "./pages/ProtectedRoute";


//pages
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import PostDetailsPage from "./pages/PostDetails";
import CreatePostPage from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import { ScrollToTop } from "./components/ReactScroll/Scroll";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationRequest());
  }, [dispatch]);

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
          <ProtectedRoute path="/post/create" component={CreatePostPage} />
          <ProtectedRoute path="/profile" component={ProfilePage} />
          <ProtectedRoute path="/post/edit/:id" component={EditPost} />
          <Route path="/posts/:id">
            <PostDetailsPage />
          </Route>
          <ProtectedRoute path="/edit/:id" component={CreatePostPage} />
        </Switch>
      </Router>
      <ScrollToTop />
    </>
  );
}

export default App;
