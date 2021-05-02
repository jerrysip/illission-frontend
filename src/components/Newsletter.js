import React, { Component } from "react";
import Mailchimp from "react-mailchimp-form";
import "./Newsletter.css";

export default class Newsletter extends Component {
  render() {
    return (
      <div className="mailchimp">
        <div className="join">Join our Newsletter</div>
        <Mailchimp
          action="https://theillissionproject.us1.list-manage.com/subscribe/post?u=81a2d427981f8f0ff196692b5&amp;id=008e7c5cc7"
          method="post"
          id="mc-embedded-subscribe-form"
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
            },
          ]}
          messages={{
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal eccor occured",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for the e-mail address.",
            button: "Subscribe",
          }}
        />
      </div>
    );
  }
}
