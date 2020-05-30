import React, { Component } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Badge,
} from "reactstrap";
export default class Cart extends Component {
  render() {
    return (
      <div>
        <DropdownMenu active>
          <DropdownItem header>Headersd</DropdownItem>
          {this.props.cart.map((item) => (
            <DropdownItem key={item.product.id}> <Badge onClick={()=>this.props.removeFromCart(item.product)} className="bg-danger">x</Badge>{item.product.productName} <Badge className="float-right">{item.quantity}</Badge></DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Sepete git</DropdownItem>
        </DropdownMenu>
      </div>
    );
  }
}
