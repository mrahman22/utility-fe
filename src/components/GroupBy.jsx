import React, { Component } from "react";
import groupBy from "lodash/groupBy";

export class GroupBy extends Component {
  state = {
    groupedProducts: [],
  };

  componentDidMount() {
    this.setState({
      groupedProducts: this.props.products.reduce((r, a) => {
        r[a.type] = r[a.type] || [];
        r[a.type].push(a);
        return r;
      }, Object.create(null)),
    });
  }

  render() {
    console.log(Object.values(this.state.groupedProducts));
    const { products } = this.props;
    return (
      <div>
        <ul className="products">
          {Object.keys(this.state.groupedProducts)
            .sort()
            .map((product) => {
              return (
                <li key={product}>
                  <h2>{product}</h2>
                  {products.map((products) => {
                    if (products.type === product) {
                      return (
                        <>
                          <p>{products.name}</p>
                          <p>{products.price.value}</p>
                        </>
                      );
                    }
                  })}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default GroupBy;
