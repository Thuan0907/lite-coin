import "./App.css";
import Banner from "./component/banner/Banner";
import BtnLoading from "./component/btnLoad/BtnLoading";
import Content from "./component/content/Content";
import EmailBox from "./component/emailBox/EmailBox";
import Footer from "./component/footer/Footer";
import FooterBottom from "./component/footer/FooterBottom";
import { StickyContainer, Sticky } from "react-sticky";

import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import Products from "./component/products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Nav /> */}
      <Banner />
      <Content />
      <Products />
      <BtnLoading />
      <EmailBox />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;
