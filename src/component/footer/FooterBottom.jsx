import React, { Component } from "react";
import "./FooterBottom.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BsTwitter, BsPhone, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2, ImGooglePlus } from "react-icons/im";

class FooterBottom extends Component {
  render() {
    return (
      <>
        <div className="footerBottom-wrap">
          <Container>
            <Row>
              <Col>Copyright © Crypto 2018. All rights reserved.</Col>
              <Col className="footerBottom-center">
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Buy Tokens</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                </ul>
              </Col>
              <Col className="footerBottom-social">
                <ul>
                  <li>
                    <a href="">{<FaFacebookF />}</a>
                  </li>
                  <li>
                    <a href="">{<BsYoutube />}</a>
                  </li>
                  <li>
                    <a href="">{<ImGooglePlus />}</a>
                  </li>
                  <li>
                    <a href="">{<BsTwitter />}</a>
                  </li>
                  <li>
                    <a href="">{<ImLinkedin2 />}</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default FooterBottom;
