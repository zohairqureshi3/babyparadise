import React from "react";
import { Container, Image, Button, Row, Col } from "react-bootstrap";
import Product5 from "../assets/images/Product-05.png";
import Product6 from "../assets/images/Product-06.png";
import Product7 from "../assets/images/Product-07.png";
import Product8 from "../assets/images/Product-08.png";
import Product9 from "../assets/images/Product-09.png";
import Product10 from "../assets/images/Product-10.png";
import Product11 from "../assets/images/Product-11.png";
import LoadMoreIcon from "../assets/images/load-more-icon.png";

function LoadMoreProducts() {
  return (
    <section id="load-more-products">
      <Container fluid className="custom-container">
        <Row>
          <Col sm={3} col={6}>
            <div className="load-more-product-wrapper">
              <div className="load-more-product-item">
                <div className="img-price-wrapper">
                  <div className="load-more-product-item-img">
                    <Image src={Product5} alt="" fluid />
                  </div>
                  <div className="load-more-product-item-price">
                    <span className="original-price">Rs.5300</span>
                  </div>
                </div>
                <p>Baby Hoodie Set</p>
                <Button className="shop-now" variant="success">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={3} col={6}>
            <div className="load-more-product-wrapper">
              <div className="load-more-product-item">
                <div className="img-price-wrapper">
                  <div className="load-more-product-item-img">
                    <Image src={Product5} alt="" fluid />
                  </div>
                  <div className="load-more-product-item-price">
                    <span className="original-price">Rs.5300</span>
                  </div>
                </div>
                <p>Baby Frock Suit</p>
                <Button className="shop-now" variant="success">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={3} col={6}>
            <div className="load-more-product-wrapper">
              <div className="load-more-product-item">
                <div className="img-price-wrapper">
                  <div className="load-more-product-item-img">
                    <Image src={Product6} alt="" fluid />
                  </div>
                  <div className="load-more-product-item-price">
                    <span className="original-price">Rs.5300</span>
                  </div>
                </div>
                <p>Baby Clothe Set</p>
                <Button className="shop-now" variant="success">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={3} col={6}>
            <div className="load-more-product-wrapper">
              <div className="load-more-product-item">
                <div className="img-price-wrapper">
                  <div className="load-more-product-item-img">
                    <Image src={Product7} alt="" fluid />
                  </div>
                  <div className="load-more-product-item-price">
                    <span className="original-price">Rs.5300</span>
                  </div>
                </div>
                <p>Kids Party Wear Dress</p>
                <Button className="shop-now" variant="success">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={3} col={6}>
            <div className="load-more-product-wrapper">
              <div className="load-more-product-item">
                <div className="img-price-wrapper">
                  <div className="load-more-product-item-img">
                    <Image src={Product8} alt="" fluid />
                  </div>
                  <div className="load-more-product-item-price">
                    <span className="original-price">Rs.5300</span>
                  </div>
                </div>
                <p>Baby Boy Casual Dress</p>
                <Button className="shop-now" variant="success">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={3} col={6}>
            <div className="load-more-product-wrapper">
              <div className="load-more-product-item">
                <div className="img-price-wrapper">
                  <div className="load-more-product-item-img">
                    <Image src={Product9} alt="" fluid />
                  </div>
                  <div className="load-more-product-item-price">
                    <span className="original-price">Rs.5300</span>
                  </div>
                </div>
                <p>Kids Party Wear Suit</p>
                <Button className="shop-now" variant="success">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={3} col={6}>
            <div className="load-more-product-wrapper">
              <div className="load-more-product-item">
                <div className="img-price-wrapper">
                  <div className="load-more-product-item-img">
                    <Image src={Product10} alt="" fluid />
                  </div>
                  <div className="load-more-product-item-price">
                    <span className="original-price">Rs.5300</span>
                  </div>
                </div>
                <p>Baby Girl Warm Suit</p>
                <Button className="shop-now" variant="success">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={3} col={6}>
            <div className="load-more-product-wrapper">
              <div className="load-more-product-item">
                <div className="img-price-wrapper">
                  <div className="load-more-product-item-img">
                    <Image src={Product11} alt="" fluid />
                  </div>
                  <div className="load-more-product-item-price">
                    <span className="original-price">Rs.5300</span>
                  </div>
                </div>
                <p>Baby Accessories Box</p>
                <Button className="shop-now" variant="success">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="load-more">
          <a href="#">
            <p>Load More</p>
            <Image src={LoadMoreIcon} alt="" fluid />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default LoadMoreProducts;
