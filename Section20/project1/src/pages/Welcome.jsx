import { Route, Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/welcome/new-user">New user?</Link>
      <Route path="/welcome/new-user">
        <p>Welcome new User</p>
      </Route>
    </div>
  );
};

export default Welcome;
