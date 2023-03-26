import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Footer.scss";
import { BiMap } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <img
            src="https://vtcoder-html6.surge.sh/img/footer.jpg"
            alt=""
            className="imgFooter"
          />
          <Container className="footer-content">
            <h3>CONTACT</h3>
            <h2>Company Name</h2>
            <Row>
              <ul>
                <li>
                  {" "}
                  <span className="footer-icon">{<BiMap />}</span>
                  <a href="">123 sdasdasd, sadasddasd , USA</a>
                </li>
                <li>
                  <span className="footer-icon">{<BsPhone />}</span>
                  <a href="">+123456799</a>
                </li>
                <li>
                  <span className="footer-icon">{<AiOutlineMail />}</span>
                  <a href="">info@asdadas.com</a>
                </li>
              </ul>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Footer;
