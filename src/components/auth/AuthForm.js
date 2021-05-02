import React, { useState, useEffect } from "react";
import { Grid, Card, Typography, Button, TextField } from "@material-ui/core";
import { useAuth } from "./auth";
import { Link, withRouter } from "react-router-dom";
import "./AuthForm.css";
const AuthForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("");
  const { setUserName, setAuthToken, user_name } = useAuth();

  const authenticate = async () => {
    const basePath = "http://localhost:5000/api/auth"; //server side path
    let url = basePath;

    if (action === "Sign In") {
      url += "login";
    }
    console.log(url);
    console.log(action);

    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      setAuthToken(json.token);
      setUserName(json.user.username); //auth context provider
      setUsername(json.user.username);
    } else {
      alert(json.msg);
    }
  };

  useEffect(() => {
    if (props.action) {
      setAction(props.action);
    } else {
      if (props.location.pathname === "/signup") {
        setAction("Sign Up");
      } else {
        setAction("Sign In");
      }
    }
  }, [props]);

  const components = [
    <TextField
      placeholder="Username"
      name="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />,
    <TextField
      placeholder="Password"
      name="password"
      value={password}
      type="password"
      onChange={(e) => setPassword(e.target.value)}
    />,

    <Button
      variant="contained"
      className=" text-white mt-5 mb-2"
      onClick={() => authenticate()}
      style={{ backgroundColor: "black", fontFamily: "arial" }}
    >
      {action}
    </Button>,
  ];

  if (user_name) {
    //redirect to homepage
  }

  return (
    <Grid
      container
      direction="row"
      item
      xs={12}
      justify="center"
      alignItems="center"
    >
      <Grid
        containeer
        direction="column"
        alignItems="stretch"
        justify="center"
        component={Card}
        item
        spacing={3}
        xs={8}
        md={4}
        style={{ padding: "20px" }}
      >
        <Grid container xs={12} justify="center">
          <Typography
            variant="h3"
            style={{ fontFamily: "arial", textTransform: "uppercase" }}
          >
            {action}
          </Typography>
        </Grid>
        {components.map((component) => {
          return (
            <Grid
              container
              item
              direction="column"
              xs={12}
              alignItems="stretch"
            >
              {component}
            </Grid>
          );
        })}
        <form
          className="facebook"
          method="get"
          action="http://localhost:5000/facebook"
        >
          <button className="fb" type="submit">
            <i class="fab fa-facebook"></i>
            LOGIN WITH FACEBOOK
          </button>
        </form>
        <form
          className="google"
          method="get"
          action="http://localhost:5000/google/"
        >
          <button className="g" type="submit">
            <i
              class="fab fa-google-plus-g"
              // style={{ color: "red", fontSize: 18 }}
            ></i>
            LOGIN WITH GOOGLE
          </button>
        </form>

        {action === "Sign In" ? (
          <Link to="/signup">Don't have an account? Sign Up</Link>
        ) : (
          <Link to="/signin">Already have an account? Sign in</Link>
        )}
      </Grid>
    </Grid>
  );
};

export default withRouter(AuthForm);
