import { ListGroup, ListGroupItem, Badge } from "reactstrap";

import React, { Component } from "react";

class Category extends Component {
  state = {
    category: [],
  };

  componentDidMount() {
      this.getCategorories()
  }

  getCategorories = () => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((res) => this.setState({ category: res }));
  };

  render() {
    return (
      <div>
        <ListGroup>
          {this.state.category.map((item) => (
            <ListGroupItem active={this.props.currentCategoryId==item.id} onClick={()=>this.props.currentCategory(item)} key={item.id} className="justify-content-between">
            <Badge className="" pill>{item.id}</Badge>  {item.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default Category;
