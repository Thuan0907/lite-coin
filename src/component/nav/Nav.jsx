import React, { Component } from "react";
import "./Nav.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { StickyContainer, Sticky } from "react-sticky";

class Nav extends Component {
  render() {
    return (
      <>
        <div className="navWrap">
          <Container>
            <Row>
              <Col className="nav-left">
                <img src="https://vtcoder-html6.surge.sh/img/logo.png" alt="" />
              </Col>
              <Col className="nav-main" xs={6}>
                <ul>
                  <li>
                    <a href="" className="active">
                      Home
                    </a>
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
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </Col>
              <Col className="nav-right">
                <button className="logIn">Log in</button>
                <span className="signUp">Sign Up</span>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Nav;
