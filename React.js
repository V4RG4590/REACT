import React from 'react';
import ReactDOM from 'react-dom';

function LoginForm() {
  return (
    <div className="login-form">
      <h3 className="login-title">Log In</h3>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navigation />
      <LoginForm />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
