import React, { Component } from "react";
import "./Social.css";
import { Link } from "react-router-dom";

export default class Social extends Component {
  render() {
    return (
      <div className="social">
        <a href="http://www.instagram.com/theillissionproject">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="http://www.facebook.com/theillissionproject">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="mailto: theillissionproject@gmail.com">
          <i class="far fa-envelope"></i>
        </a>
        <Link to="/signin" className="btn">
          <i class="fas fa-user"></i>
        </Link>
      </div>
    );
  }
}
