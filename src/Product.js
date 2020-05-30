import React, { Component } from "react";
import { Table, Button } from 'reactstrap';

class Product extends Component {
  render() {
    return (
      <div>
        <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.product.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.productName}</td>
                <td>{item.quantityPerUnit}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td>
                <td>
                    <Button onClick={()=>this.props.addCart(item)} className="btn-sm bg-success">Sepete Ekle</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Product;
