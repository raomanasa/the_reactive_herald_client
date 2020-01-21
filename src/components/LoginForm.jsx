import React, { useState } from "react";
import { connect } from "react-redux";
import auth from "../modules/auth"

const LoginForm = props => {
  const [displayLoginButton, setDisplayLoginButton] = useState(true)

  const onLogin = event => {
    event.preventDefault();
    auth
      .signIn(event.target.email.value, event.target.password.value)
      .then(userDatas => {
        console.log(userDatas);
      })
      .catch(error => {
        console.log(error);
    });
  };

  return (
      <>
        {displayLoginButton ? (
          <button onClick={() => setDisplayLoginButton(false)}>
            Login
          </button>
        ) : (
          <form id="login-form" onSubmit={onLogin}>
            <label>Email:</label>
            <input name="email" type="email" id="email"></input>

            <label>Password:</label>
            <input name="password" type="password" id="password"></input>

            <button id="submit">Submit</button>
          </form>
        )} 
      </>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAuth: auth => {
      dispatch({ type: "CHANGE_AUTHENTICATED", payload: auth });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);