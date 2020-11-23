import React, { Component } from "react";
import PriceOrdering from "./PriceOrdering";
import GroupBy from "./GroupBy";
import * as api from "../api";

export class ProductList extends Component {
  state = {
    products: [],
    isLoading: true,
  };

  handleOrder = (order) => {
    console.log(order)
    this.setState({ order: order });
  };

  handleGroup = (val) => {
    console.log(val)
    this.setState({sortBy: val})
  }


  componentDidMount() {
    this.fetchAllProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.order !== this.state.order || prevState.sortBy !== this.state.sortBy) {
      api.fetchProducts(this.state.order, this.state.sortBy).then((products) => {
        this.setState({ products, isLoading: false });
      });
    }
  }

  fetchAllProducts = () => {
    api.fetchProducts().then((products) => {
      this.setState({ products, isLoading: false });
    });
  };

  render() {
    const { products, isLoading } = this.state;
    if (isLoading) return "Loading.....";
    return (
      <div>
        <GroupBy handleGroup={this.handleGroup} />
        <br />
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
