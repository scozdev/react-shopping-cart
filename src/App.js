import React, { Component } from "react";

import Navi from "./Navi";
import Category from "./Category.js";
import Product from "./Product.js";

import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    product: [],
    currentCategoryId: 0,
    cart: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (item) => {
    let link = "http://localhost:3000/products";

    if (item) {
      link += "?categoryId=" + item;
    }

    fetch(link)
      .then((res) => res.json())
      .then((res) => this.setState({ product: res }));
  };

  currentCategory = (category) => {
    let id;
    if (category) {
      id = category.id;
    } else {
      id = 0;
    }

    this.setState({ currentCategoryId: id });
    this.getProducts(id);
  };

  addCart = (product) => {
    let newCart = this.state.cart;
    var addItem = newCart.find((e) => e.product.id == product.id);

    if (addItem) {
      addItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart;
    var filterr = newCart.filter((e) => e.product.id !== product.id);
    this.setState({ cart: filterr });
  };

  render() {
    return (
      <div>
        <Container className="my-2">
          <Navi
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
            getProducts={this.currentCategory}
          ></Navi>

          <Row>
            <Col xs="3" className="my-3">
              <Category
                currentCategoryId={this.state.currentCategoryId}
                currentCategory={this.currentCategory}
              ></Category>
            </Col>
            <Col xs="9" className="my-3">
              <Product
                addCart={this.addCart}
                product={this.state.product}
              ></Product>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
