import React, { Component } from "react";
import PriceOrdering from "./PriceOrdering";
import * as api from "../api";

export class ProductList extends Component {
  state = {
    products: [],
    isLoading: true,
    order: "asc",
  };

  handleOrder = (order) => {
    this.setState({ order: order });
  };

  componentDidMount() {
    this.fetchAllProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.order !== this.state.order) {
      api.fetchProducts(this.state.order).then((products) => {
        this.setState({ products, isLoading: false });
      });
    }
  }

  fetchAllProducts = () => {
    api.fetchProducts(this.state.order).then((products) => {
      this.setState({ products, isLoading: false });
    });
  };

  render() {
    const { products, isLoading } = this.state;
    if (isLoading) return "Loading.....";
    return (
      <div>
        <PriceOrdering handleOrder={this.handleOrder} />
        <ul className="products">
          {products.map((product) => {
            return (
              <li key={product._id}>
                <h2>Product Name: {product.name}</h2>
                <p>Department: {product.department}</p>
                <p>Type: {product.type}</p>
                <p>Description: {product.description}</p>
                <p>Price: {product.price.value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductList;
