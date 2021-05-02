import React, { Component } from "react";
import "./OurStory.css";
import { Accordion, Card, Button } from "react-bootstrap";
import Footer from "../components/Footer.js";

export default class OurStory extends Component {
  render() {
    return (
      <div className="ourstoryscreen-wrapper">
        <div className="ourstoryscreen-hero">
          {/* <img
          className="hero-image"
          src={green}
          height="500px"
          alt="green-hero"
        ></img> */}
        </div>
        <Accordion>
          <Card className="bg-dark text-white mt-5">
            <Card.Header>
              <Accordion.Toggle
                className="text-white"
                as={Button}
                variant="link"
                eventKey="0"
              >
                About The Illission Project
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                “Travel is fatal to prejudice, bigotry and narrow-mindedness,
                and many of our people need it sorely on these accounts. Broad,
                wholesome, charitable views of men and things cannot be acquired
                by vegetating in one little corner of the earth all of one’s
                life.” -Mark Twain
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="bg-dark text-white mt-1 mb-5">
            <Card.Header>
              <Accordion.Toggle
                className="text-white"
                as={Button}
                variant="link"
                eventKey="1"
              >
                The Process
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                The Illission project focuses on travel-safe products to bring
                your favorite essentials with you along for the ride. Each
                candle is hand-poured with 100% high quality soy wax mixed with
                a curation of fragrance oils. With a 1-inch candle wick intact,
                the wax is poured into 2-ounce, heat resistant vessels for easy
                portability. With meticulous measurements and a 1-week cure, the
                quality of each candle remains consistent. All products are
                properly stored and packaged to ensure safe shipping.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Footer />
      </div>
    );
  }
}
