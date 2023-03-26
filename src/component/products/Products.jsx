import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { AiFillStar } from "react-icons/ai";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2, ImGooglePlus } from "react-icons/im";
import "./Products.scss";

class Products extends Component {
  render() {
    const renderProducts = () => {
      return Array.from(Array(8).keys()).map(() => (
        <div className="product">
          <img src="https://vtcoder-html6.surge.sh/img/icoin.png" alt="" />
          <div className="info">
            <h3>Lite Coin</h3>
            <div className="rating">
              <ul>
                <li>{<AiFillStar />}</li>
                <li>{<AiFillStar />}</li>
                <li>{<AiFillStar />}</li>
                <li>{<AiFillStar />}</li>
                <li>{<AiFillStar />}</li>
              </ul>
              <p>1000 view</p>
            </div>
            <p>
              {" "}
              <span> 30.5%</span> - 28days left
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="social">
            <ul>
              <li>
                {" "}
                <a href=""> {<FaFacebookF />}</a>
              </li>
              <li>
                {" "}
                <a href=""> {<BsTwitter />}</a>
              </li>
              <li>
                {" "}
                <a href=""> {<ImGooglePlus />}</a>
              </li>
              <li>
                {" "}
                <a href=""> {<BsYoutube />}</a>
              </li>
              <li>
                {" "}
                <a href=""> {<ImLinkedin2 />}</a>
              </li>
            </ul>
          </div>
        </div>
      ));
    };
    return (
      <div>
        <Container className="product-wrap">{renderProducts()}</Container>
      </div>
    );
  }
}

export default Products;
