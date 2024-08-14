import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

import "./FakeComponent.css";

const FakeComponent = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      }).catch((error) => {
        console.error(error);
      })
  }, []);

  return (
    <div className="card-container" style={{ gap: "2rem" }}>
      {product.map((item) => (
        <Card key={item.id} className="product-card">
          <Card.Img
            variant="top"
            src={item.image}
            alt={item.title}
            className="card-image"
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text> {item.description} </Card.Text>
            <Card.Text style={{fontWeight:'bold'}}> LKR : {item.price} </Card.Text>
            <hr className="card-divider"/>
            <div className="btn-grp">
              <Button variant="primary">Buy Now</Button>
              <Button variant="secondary" className="btn-action">
                Learn More
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FakeComponent;
