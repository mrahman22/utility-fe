import React, { Component } from "react";
import PriceOrdering from "./PriceOrdering";
import SortBy from "./SortBy";
import * as api from "../api";
import GroupBy from "./GroupBy";

export class ProductList extends Component {
  state = {
    products: [],
    isLoading: true,
    isGroup: false
  };

  handleOrder = (order) => {
    this.setState({ order: order });
  };

  handleGroup = (val) => {
    this.setState({sortBy: val, isGroup: !this.state.isGroup})
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
    const { products, isLoading, isGroup } = this.state;
    if (isLoading) return "Loading.....";
    return (
      <div>
        <SortBy handleGroup={this.handleGroup} />
        <br />
        <PriceOrdering handleOrder={this.handleOrder} />
        {!isGroup ? ( <ul className="products">
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
        </ul>) : <GroupBy products={products}/>}
      </div>
    );
  }
}

export default ProductList;
