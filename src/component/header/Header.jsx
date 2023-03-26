import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BsTwitter, BsPhone, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { ImLinkedin2, ImGooglePlus } from "react-icons/im";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <Container>
            <Row>
              <Col className="header-left">
                {" "}
                <ul>
                  <li>
                    <span className="icon">{<BiMap />}</span>
                    <span>123 sdasdasd, sadasddasd , USA</span>
                  </li>

                  <li>
                    <div className="icon">{<BsPhone />}</div>
                    <a href="">+123456799</a>
                  </li>
                  <li>
                    <div className="icon">{<AiOutlineMail />}</div>
                    <a href="">info@asdadas.com</a>
                  </li>
                </ul>
              </Col>
              <Col className="header-right">
                <ul>
                  <li>
                    <a href="">{<FaFacebookF />}</a>
                  </li>
                  <li>
                    <a href="">{<BsTwitter />}</a>
                  </li>
                  <li>
                    <a href="">{<ImGooglePlus />}</a>
                  </li>
                  <li>
                    <a href="">{<BsYoutube />}</a>
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

export default Header;
