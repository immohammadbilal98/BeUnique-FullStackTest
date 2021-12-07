import React from 'react';
import logo from './logo.png';
// import backgroundImage from './image/home-main.jpg';
import './App.css';
import {Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
 <Container >
  <Row className="align-items-center">
    <Col xs={4}>
      <Row className="grey-light">
        <Col>SHOP</Col>
        <Col>OUR STORY</Col>
        <Col>EXPERTISE</Col>
      </Row>
    </Col>
    <Col xs={4}>
    <img src={logo} className="logo" alt="logo" />
    </Col>
    <Col xs={4}>
      <Row>
      <Col xs={5} className="grey-light">CONTACT</Col>
        <Col><div className="nav-icon"></div></Col>
      </Row>
    </Col>
  </Row>
</Container>
<Container fluid>
  <div className="home-main-img">
      {/* <img src={require('./image/home-main.jpg').default} className="home-main-img" alt="logo" home-main/> */}
      <div className="pt-5">
      <h1>Super Soft, Stylish Bed Linen</h1>
      <h1>Made With Love</h1>
      </div>
  </div>
</Container>
<Container className="mt-5">
  <p className="p-4 product-name font-premium">Our premium products got the finest quality cotton that create an exquisite lightweight textile that’s both soft and crisp–guaranteed to give you a wonderful night’s sleep.</p>
  <Row className="mx-5">
    <Col className="p-0">
    <div className="home-img-1">
    <Button variant="light" className="justify-content-end button-home  border border-0">Shop Bed Linens</Button>
    </div>
    </Col>
    <Col className="p-0">
    <div className="home-img-2">
       <Button variant="light" className="justify-content-end button-home border border-0">Shop Bath Towels</Button>
    </div>
    </Col>
  </Row>
  <Row className="mx-5">
    <Col className="p-0">
    <div className="home-img-3">
       <Button variant="light" className="justify-content-end button-home border border-0">Shop Bath Robes</Button>
    </div>
    </Col>
    <Col className="p-0">
    <div className="home-img-4">
       <Button variant="light" className="justify-content-end button-home border border-0">Shop Home Fragrances</Button>
    </div>
    </Col>
  </Row>
  
</Container>

<Container>
  <h3 className="text-center mt-5">Best Sellers</h3>
  <Row>
    <Col >
    <div className="bs-img-1"></div>
    <div className="text-start mt-1">
       <p className="product-name">Product Name</p>
       <p>AED XXX</p>
       <p className="grey-light">Available in 5 Colour</p>
    </div>
    </Col>
    <Col >
    <div className="bs-img-2"></div>
    <div className="text-start mt-1">
       <p className="product-name">Product Name</p>
       <p>AED XXX</p>
       <p className="grey-light">Special Offer Get 25% Off</p>
    </div>
    </Col>
    <Col >
    <div className="bs-img-3"></div>
    <div className="text-start mt-1">
       <p className="product-name">Product Name</p>
       <p>AED XXX</p>
       <p className="grey-light"> Available in 3 Colour</p>
    </div>
    </Col>
  </Row>
</Container>

<Container fluid className="comfort-color py-4">
  <h3 className="text-center mt-5 pt-3 pb-1">Your Comfort Is Our #1 Priority</h3>
  <Row>
    <Col xs={3} className="d-flex flex-column align-items-center">
    <div className="icon-1"></div>
    <p className="product-name">Quality Product</p>
    <p>Lorem ipsum dolorsitamet,
consecteturadipiscingelit,seddo</p>
    </Col>
    <Col xs={3} className="d-flex flex-column align-items-center">
    <div className="icon-2"></div>
    <p className="product-name">Lifetime Warranty</p>
    <p>Lorem ipsum dolorsitamet,
consecteturadipiscingelit,seddo</p>
    </Col>
    <Col xs={3} className="d-flex flex-column align-items-center">
    <div className="icon-3"></div>
    <p className="product-name">Stress-free Shopping</p>
    <p>Lorem ipsum dolorsitamet,
consecteturadipiscingelit,seddo</p>
    </Col>
    <Col xs={3} className="d-flex flex-column align-items-center">
    <div className="icon-4"></div>
    <p className="product-name">Fair Prices</p>
    <p>Lorem ipsum dolorsitamet,
consecteturadipiscingelit,seddo</p>
    </Col>
    </Row>
    </Container>    
    <Container className="star-content">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="star-icon mb-2"></div>
        <p className="star-p-content product-name">"This is the best towel set I've ever had; it's cool, comfortable and aesthetically perfect."</p>
        <u>READ TESTIMONIALS</u>
      </div>
    </Container>
    <Container>
      <p className="grey-light">FOLLOWS US ON <img src={"https://img.icons8.com/material-outlined/25/000000/instagram-new.png"}/></p>
    </Container>
    <Container fluid>
      <div className="four-in-one"></div>
    </Container>
    <Container className="my-5">
      <Row className="text-start">
        <Col xs={4}>
        <h5 className="mb-3">OUR STORY</h5>
        <p className="grey-light">
        Lorem ipsum dolorsitamet,consectetur
adipiscingelit,seddoeiusmodtempor
incididuntutlaboreetdoloremagnaaliqua.
        </p>
        </Col>
        <Col xs={2}>
        <h5 className="mb-3">MORE..</h5>
        <div className="grey-light">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Track My Order</p>
          <p>FAQ</p>
         </div> 
        </Col>
        <Col xs={2}>
        <h5 className="mb-3">SHOP</h5>   
        <div className="grey-light">
        <p>Bed Linen</p>
          <p>Bath Towels</p>
          <p>Bathrobes</p>
          <p>Home Fragrances</p>  
          </div> 
         
        </Col>
        <Col xs={4}>
        <h5 className="mb-3">NEWSLETTER</h5>
        <p className="grey-light">Subscribe to receive updates, access to exclusive deals, and more.</p>
        <Row>
          <Col xs={8}><Form.Control type="text" placeholder="Enter your email address" /></Col>
          <Col><Button variant="dark" className=" border border-0">Subscribe</Button></Col>
          </Row>     
        
        </Col>
      </Row>
    </Container>
    <Container>
      <p className="text-start">©2021 BLAUCHE</p>
    </Container>
</div>
  );
}

export default App;
