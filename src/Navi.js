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
import { Link } from "react-router-dom";
import Cart from "./Cart";

class Navi extends Component {
  state = {
    dropdownOpen: false,
  };

  toggle = (e) => {
    this.state.dropdownOpen
      ? this.setState({ dropdownOpen: false })
      : this.setState({ dropdownOpen: true });
  };

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink
              onClick={() => this.props.getProducts()}
              href="#"
              active
              className="bg-info "
            >
              <Link to="/" className="text-dark font-weight-bold">
                Anasayfa
              </Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
         
          <Dropdown
            className="ml-auto"
            nav
            isOpen={this.state.dropdownOpen}
            onClick={() => this.toggle()}
          >
            <DropdownToggle nav caret>
              Sepet <Badge>{this.props.cart.length}</Badge>
            </DropdownToggle>
            <Cart
              removeFromCart={this.props.removeFromCart}
              cart={this.props.cart}
            ></Cart>
          </Dropdown>
        </Nav>
      </div>
    );
  }
}

export default Navi;
