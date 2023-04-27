import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';

function Login() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the entered username in state
    setUsername(event.target.elements.username.value);
  };

  return (
    <div>
      <h1 className="grid-title">Bootcamper's Survival Guide</h1>

      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br /><br />
          <Link to={{ pathname: "/grid", state: { username } }}>
  <button type="submit" value="Submit">Submit</button>
</Link>

        </form>
      </div>
    </div>
  );
}

export default Login;
